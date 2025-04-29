import Banner from "../../models/marketing/bannerModel.js";
import cloudinary from "../../service/cloudinary.js";
import {CLOUDINARY_FOLDER} from "../../utilities/initValue.js"
const getAllBanner = async (req, res) => {
    try {
        return await Banner.find();
    } catch (error) {
        throw new Error(error);
    }
}

const getBannerById = async (req, res) => {
    try {
        return await Banner.findById(req.params.id);
    } catch (error) {
        throw new Error(error);
    }
}

const createBanner = async (req) => {
    try {
        const filePath = req.file ? req.file.path : null;
        if (!filePath) throw new Error('No file uploaded');
        const uploadResult = await cloudinary.uploader.upload(filePath, {
            folder: `${CLOUDINARY_FOLDER}/banners`
        });
        return await Banner.create({
            name: req.body.name,
            link: uploadResult.secure_url,
            position: req.body.position,
            status: req.body.status,
            endDate: req.body.endDate,
        });
    } catch (error) {
        throw new Error(error);
    }
}

export default { getAllBanner, getBannerById, createBanner }
