import bannerDAO from "../../repositories/marketing/bannerDAO.js";

const getAllBanner = async (req, res, next) => {
    try {
        const data = await bannerDAO.getAllBanner();
        return res.status(200).json({data: data, message: "Get all banner successfully"});
    } catch (error) {
        next(error);
    }
}

const getBannerById = async (req, res, next) => {
    try {
        const data = await bannerDAO.getBannerById(req.params.id);
        return res.status(200).json({data: data, message: "Get banner by id successfully"});
    } catch (error) {
        next(error);
    }
}

const createBanner = async (req, res) => {
    try {
        const data = await bannerDAO.createBanner(req);
        return res.status(200).json({data: data, message: "Create banner successfully"});
    } catch (error) {
        next(error);
    }
}

export default { getAllBanner, getBannerById, createBanner }