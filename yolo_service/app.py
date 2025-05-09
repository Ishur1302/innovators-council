from flask import Flask, request, jsonify
from ultralytics import YOLO
import numpy as np
from PIL import Image

app = Flask(__name__)
model = YOLO("yolov8s.pt")  # Nano model for speed

@app.route('/detect', methods=['POST'])
def detect():
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

if __name__ == '__main__':
    app.run(port=5002)
