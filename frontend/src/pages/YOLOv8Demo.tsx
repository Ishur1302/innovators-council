import React, { useRef, useState } from "react";
import axios from "axios";

export default function YOLOv8Demo() {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [detections, setDetections] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Handle image selection
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
            setDetections([]);
        }
    };

    // Send image to backend YOLO endpoint
    const handleDetect = async () => {
        if (!image) return;
        setLoading(true);
        const formData = new FormData();
        formData.append("image", image);
        try {
            // Use your backend port (5001)
            const res = await axios.post("http://localhost:5001/api/yolo-detect", formData);
            setDetections(res.data.detections);
        } catch (err) {
            alert("Detection failed.");
        }
        setLoading(false);
    };

    // Draw bounding boxes after detections
    React.useEffect(() => {
        if (!preview || detections.length === 0) return;
        const img = new window.Image();
        img.src = preview;
        img.onload = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            detections.forEach(det => {
                const [x1, y1, x2, y2] = det.box;
                ctx.strokeStyle = "#3b82f6";
                ctx.lineWidth = 3;
                ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
                ctx.fillStyle = "#3b82f6";
                ctx.font = "20px Poppins";
                ctx.fillText(`${det.label} (${(det.confidence * 100).toFixed(0)}%)`, x1, y1 > 20 ? y1 - 5 : y1 + 20);
            });
        };
    }, [preview, detections]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] pt-28">
            <div className="bg-gradient-to-br from-primary-100 via-accent-100 to-gold-100 rounded-5xl shadow-3d p-12 w-full max-w-xl text-center border border-white border-opacity-40 backdrop-blur-md">
                <h1 className="text-3xl font-bold text-primary-500 mb-4 font-display">
                    YOLOv8 Demo
                </h1>
                <p className="text-dark-700 mb-4 font-body">
                    Upload an image to see real-time object detection powered by YOLOv8!
                </p>
                <input
                    type="file"
                    accept="image/*"
                    className="mb-4"
                    onChange={handleImageChange}
                />
                {preview && (
                    <div className="mb-4">
                        <canvas ref={canvasRef} style={{ maxWidth: "100%", borderRadius: "1rem" }} />
                    </div>
                )}
                <button
                    onClick={handleDetect}
                    disabled={!image || loading}
                    className="bg-gradient-to-r from-primary-500 to-accent-500 text-white font-display px-8 py-3 rounded-4xl shadow-neon hover:scale-105 transition mb-4"
                >
                    {loading ? "Detecting..." : "Detect Objects"}
                </button>
                {detections.length > 0 && (
                    <div className="mt-4 text-left">
                        <h2 className="font-bold text-primary-500 mb-2">Detections:</h2>
                        <ul className="text-dark-700 font-body">
                            {detections.map((det, idx) => (
                                <li key={idx}>
                                    {det.label} ({(det.confidence * 100).toFixed(1)}%)
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
