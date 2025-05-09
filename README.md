# Innovators Council: Multi-Agent + YOLOv8 Platform

A full-stack platform featuring a multi-agent council (LogicBot, Researcher, CreativeAI, Vision Agent) with real-time object detection powered by YOLOv8.

---

## 🚀 Features

- **Frontend:** React (Vite), beautiful UI, image upload, bounding box display
- **Backend:** Node.js/Express, API for agents and YOLO detection
- **Vision Agent:** Python Flask microservice running YOLOv8 (object detection)
- **Multi-Agent Feedback:** LogicBot, Researcher, and CreativeAI respond to queries and detected objects

---

## 🗂️ Project Structure

/frontend # React app (Vite)
/backend # Node.js/Express API
/yolo_service # Python Flask YOLOv8 microservice


---

## 🛠️ Prerequisites

- **Node.js** (v18+ recommended)
- **Python** (v3.8+ recommended)
- **pip** (Python package manager)
- **npm** (Node package manager)
- **Git**

---

## ⚡ Quickstart: Local Development

### 1. **Clone the Repository**

git clone https://github.com/yourusername/innovators-council.git
cd innovators-council

---

### 2. **Start YOLOv8 Python Service**

cd yolo_service
pip install -r requirements.txt

Or, if requirements.txt is missing:
pip install ultralytics flask pillow

Use a more accurate model for better results:
In app.py, set: model = YOLO("yolov8s.pt")
python3 app.py

Runs on http://localhost:5002
---

### 3. **Start the Node.js Backend**
cd ../backend
npm install
npm run dev
Runs on http://localhost:5001
---

### 4. **Start the React Frontend**

cd ../frontend
npm install
npm run dev

Runs on http://localhost:5173

---

### 5. **Try it Out**

- Visit [http://localhost:5173](http://localhost:5173)
- Go to the YOLOv8 Demo page
- Upload an image and click "Detect Objects"
- See bounding boxes and agent feedback!

---

## 🌍 Deployment (Free Tiers)

- **YOLOv8 Python Service:** [Koyeb](https://www.koyeb.com/) (Flask, free)
- **Backend (Node.js):** [Render](https://render.com/) (free)
- **Frontend (React):** [Vercel](https://vercel.com/) or [Cloudflare Pages](https://pages.cloudflare.com/) (free)

**Update all URLs in your code to use environment variables for deployed endpoints.**

---

## ⚙️ Environment Variables

**Backend (`backend/.env`):**
PORT=5001
YOLO_API_URL=http://localhost:5002/detect

*(Change YOLO_API_URL to your deployed Koyeb URL in production.)*

**Frontend (`frontend/.env`):**
VITE_BACKEND_URL=http://localhost:5001
*(Change to your Render backend URL in production.)*

---

## 📝 Example API Endpoints

- **POST** `/api/yolo-detect`  
  Upload an image (field: `image`) for YOLOv8 detection.

---

## 🧹 .gitignore Recommendations

node_modules/
.env
uploads/
dist/
pycache/
*.pyc
---

## 🤖 Credits

- [Ultralytics YOLOv8](https://github.com/ultralytics/ultralytics)
- [Render](https://render.com/)
- [Koyeb](https://www.koyeb.com/)
- [Vercel](https://vercel.com/)

---

## 📄 License

MIT License

---

## 💡 Troubleshooting

- **No objects detected:** Try images with clear, common objects and use `yolov8s.pt` or larger models.
- **Detection failed:** Check backend and Python service logs for errors.
- **Frontend not connecting:** Ensure all services are running and URLs are correct.

---

## 🙋‍♂️ Need Help?

Open an issue or contact the maintainer.


