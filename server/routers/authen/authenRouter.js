import express from "express";
import authController from "../../controllers/authen/authController.js";

const authenRouter = express.Router();

authenRouter.get("/", authController.getAllAccount);

export default authenRouter;
