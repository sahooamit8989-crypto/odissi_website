
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import { connectCloudinary } from "./config/cloudinary.js";
import router from "./router/userrouter.js";

const app = express();
const port = process.env.PORT || 4000;

// Connect DB + Cloudinary
connectDB();
connectCloudinary()
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/content',router)
app.get("/", (req, res) => {
  res.send("API working now");
});

app.listen(port, () => console.log("Server started on port", port));
