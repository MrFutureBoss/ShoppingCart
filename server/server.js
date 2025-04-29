import cron from "node-cron";
import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import createError from "http-errors";
import connectDB from "./service/dbconnection.js";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import routes from "./routers/index.js";
dotenv.config();

const app = express()

//CORS
app.use(
    cors({
      origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
      credentials: true,
    })
  );


  // Add JSON parsing middleware at the start for all incoming requests
app.use(json());


// Connect to the database before starting the server
connectDB();

// Create HTTP and WebSocket servers
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use((req, res, next) => {
    req.io = io;
    next();
  });


//Global error and handle it
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.status || 500,
    message: err.message || "Internal Server Error from code",
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for urlencoded form submissions

//route
app.use("/api/auth", routes.authenRouter);
app.use("/api/banner", routes.bannerRouter);

const port = process.env.PORT || 9999;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });