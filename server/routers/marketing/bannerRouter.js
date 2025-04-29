import { Router } from "express";
import bannerController from "../../controllers/marketing/bannerController.js";
import multer from "multer";


const bannerRouter = Router();

bannerRouter.get("/", bannerController.getAllBanner);
bannerRouter.get("/:id", bannerController.getBannerById);

const upload = multer({ dest: "uploads/" });
bannerRouter.post("/", upload.single("link"), bannerController.createBanner);

export default bannerRouter;
