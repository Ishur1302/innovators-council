import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuerySubmission from "./pages/QuerySubmission";
import AgentCouncilPanel from "./pages/AgentCouncilPanel";
import YOLOv8Demo from "./pages/YOLOv8Demo";
import ResultsHistory from "./pages/ResultsHistory";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-primary-100 via-accent-100 to-gold-100 flex flex-col font-body">
                <Navbar />
                <main className="flex-1 w-full max-w-6xl mx-auto py-8 px-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/submit" element={<QuerySubmission />} />
                        <Route path="/council" element={<AgentCouncilPanel />} />
                        <Route path="/yolov8" element={<YOLOv8Demo />} />
                        <Route path="/history" element={<ResultsHistory />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
