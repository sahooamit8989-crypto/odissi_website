import express from "express";

import { addContent,  addVideo, createEvent, deleteContent, deleteEvent, deleteVideo, getAllContent, getAllEvents, getAllVideos,  } from "../controller/useraddImage.js";
import upload from "../middleware/multer.js";
import { loginAdmin } from "../controller/adminLoginController.js";

const router = express.Router();

router.post("/add", upload.single("image"), addContent);
router.get("/all", getAllContent);
router.delete("/delete/:id", deleteContent);
router.post("/video/add", addVideo); 
router.get("/video/all", getAllVideos);
router.delete("/video/delete/:id", deleteVideo);





router.post("/create",upload.single("image"), createEvent);

// Get All Events
router.get("/event", getAllEvents);
// Delete Event
router.delete("/deletes/:id", deleteEvent);


router.post('/login',loginAdmin)
export default router;
