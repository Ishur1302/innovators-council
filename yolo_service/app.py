from flask import Flask, request, jsonify
from ultralytics import YOLO
import numpy as np
import os
from PIL import Image

app = Flask(__name__)
model = YOLO("yolov8s.pt")  # Use "yolov8n.pt" for nano, "yolov8s.pt" for small

@app.route('/detect', methods=['POST'])
def detect():
    try:
        file = request.files['image']
        image = Image.open(file.stream)
        img_array = np.array(image)
        results = model(img_array)
        detections = []
        for box in results[0].boxes:
            x1, y1, x2, y2 = box.xyxy[0].tolist()
            label = results[0].names[int(box.cls[0])]
            conf = float(box.conf[0])
            detections.append({
                "label": label,
                "confidence": conf,
                "box": [x1, y1, x2, y2]
            })
        return jsonify({"detections": detections})
    except Exception as e:
        print(f"Error in /detect: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
