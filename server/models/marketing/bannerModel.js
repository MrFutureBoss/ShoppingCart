import mongoose, { Schema } from "mongoose";

const bannerSchema = new Schema(
    {
        name: { type: String, required: true },
        link: { type: String, required: true },
        position: { type: String, required: true },
        status: { type: String, required: true },
        endDate: { type: Date, required: true },
    },
    { timestamps: true }
)

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;
