import express from "express";
import multer from "multer";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/yolo-detect", upload.single("image"), async (req, res) => {
    const file = req.file as Express.Multer.File | undefined;
    if (!file) {
        console.error("No file uploaded");
        return res.status(400).json({ error: "No file uploaded." });
    }
    try {
        const form = new FormData();
        form.append("image", fs.createReadStream(file.path));

        // Use environment variable for YOLO API URL, fallback to local for dev
        const YOLO_API_URL =
            process.env.YOLO_API_URL || "http://localhost:5002/detect";

        const yoloRes = await axios.post(YOLO_API_URL, form, {
            headers: form.getHeaders(),
        });
        res.json({ detections: yoloRes.data.detections });
    } catch (err: any) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                console.error("YOLO detect error response:", err.response.status, err.response.data);
            } else if (err.request) {
                console.error("YOLO detect error request:", err.request);
            } else {
                console.error("YOLO detect error message:", err.message);
            }
        } else {
            console.error("YOLO detect unknown error:", err);
        }
        res.status(500).json({ error: "YOLO detection failed." });
    } finally {
        fs.unlink(file.path, (unlinkErr) => {
            if (unlinkErr) console.error("Failed to delete uploaded file:", unlinkErr);
        });
    }
});

export default router;
