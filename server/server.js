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
// const io = new SocketIOServer(server, {
//   cors: {
//     origin: allowedOrigins, // Allow the same origins for WebSocket connections
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

app.use((req, res, next) => {
    req.io = io;
    next();
  });


  // Handle 404 errors for undefined routes
app.use((req, res, next) => {
    next(createError(404, "Resource not found"));
  });

  // Custom error handling middleware
// app.use(errorMiddleware);


//route
app.use("/api/auth", routes.authenRouter);

const port = process.env.PORT || 9999;

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });