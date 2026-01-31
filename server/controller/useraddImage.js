
import { uploadToCloudinary } from "../config/cloudinary.js";

import Content from "../models/addImage.js";
import Video from "../models/addvideo.js";
import Event from "../models/event.js";

import cleanYoutubeUrl from "../util/cleanYoutubeUrl.js";

export const addContent = async (req, res) => {
  try {
    const { title, about } = req.body;

    if (!title || !about || !req.file) {
      return res.status(400).json({
        success: false,
        message: "Title, about and image are required",
      });
    }

    // upload image to cloudinary
    const result = await uploadToCloudinary(req.file.buffer);

    const content = await Content.create({
      title,
      about,
      image: result.secure_url,
    });

    res.status(201).json({
      success: true,
      message: "Content added successfully",
      data: content,
    });
  } catch (error) {
    console.error("ADD CONTENT ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//api to get all 
export const getAllContent = async (req, res) => {
  try {
    const contents = await Content.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contents.length,
      data: contents,
    });
  } catch (error) {
    console.error("GET CONTENT ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


//delete

// DELETE content by ID
export const deleteContent = async (req, res) => {
  try {
    const { id } = req.params;

    const content = await Content.findById(id);
    if (!content) {
      return res.status(404).json({
        success: false,
        message: "Content not found",
      });
    }

    await Content.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Content deleted successfully",
    });
  } catch (error) {
    console.error("DELETE CONTENT ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};









// ================= ADD VIDEO =================
export const addVideo = async (req, res) => {
  try {
    const { title, videoUrl } = req.body;

    if (!title || !videoUrl) {
      return res.status(400).json({
        success: false,
        message: "Title and video URL are required",
      });
    }

    const cleanedUrl = cleanYoutubeUrl(videoUrl);

    const video = await Video.create({
      title,
      videoUrl: cleanedUrl,
    });

    res.status(201).json({
      success: true,
      message: "Video added successfully",
      data: video,
    });
  } catch (error) {
    console.error("ADD VIDEO ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ================= GET ALL VIDEOS =================
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: videos,
    });
  } catch (error) {
    console.error("GET VIDEO ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ================= DELETE VIDEO =================
export const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;

    const video = await Video.findByIdAndDelete(id);

    if (!video) {
      return res.status(404).json({
        success: false, 
        message: "Video not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Video deleted successfully",
    });
  } catch (error) {
    console.error("DELETE VIDEO ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};














/* ================= CREATE EVENT ================= */
export const createEvent = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Event image is required",
      });
    }

    // upload image to cloudinary
    const result = await uploadToCloudinary(req.file.buffer);

    const event = await Event.create({
      ...req.body,
      image: result.secure_url, // cloudinary image URL
    });

    res.status(201).json({
      success: true,
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    console.error("CREATE EVENT ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/* ================= GET ALL EVENTS ================= */
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({ isActive: true }).sort({ date: 1 });

    res.status(200).json({
      success: true,
      count: events.length,
      events,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//delete event
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.error("DELETE EVENT ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};




