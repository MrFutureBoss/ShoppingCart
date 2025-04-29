import mongoose, { Schema } from "mongoose";

 const userSchema = new Schema(
    {
        username: String,
        firstname: String,
        lastname: String,
        address: String,
        phone: String,
        role: String,
        status: String,
        avatar: String,
        refreshToken: String,
        socketId: String,
        lastLogin: Date,
        createdAt: Date,
        updatedAt: Date,
        __v: Number,
    }
)