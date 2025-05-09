// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[90vh] pt-32">
            <div className="bg-glass shadow-3d rounded-5xl p-12 w-full max-w-4xl text-center backdrop-blur-md border border-white border-opacity-40">
                <h1 className="text-5xl font-extrabold font-display bg-gradient-to-r from-teal-500 to-grape-500 text-transparent bg-clip-text mb-4 drop-shadow-neon">
                    Welcome to Innovators Hub
                </h1>
                <p className="text-xl text-grape-700 mb-8 font-body">
                    Collaborate with a panel of AI agents, get instant feedback, and explore the power of collective intelligence!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="bg-gradient-to-br from-teal-100 to-white rounded-4xl p-6 shadow-glass border-2 border-teal-500">
                        <span className="text-3xl">🤖</span>
                        <h2 className="font-bold text-teal-500 mt-2 mb-1 font-display">Multi-Agent Feedback</h2>
                        <p className="text-grape-700 text-sm font-body">Insights from logic, research, and creative AI agents.</p>
                    </div>
                    <div className="bg-gradient-to-br from-grape-100 to-white rounded-4xl p-6 shadow-glass border-2 border-grape-500">
                        <span className="text-3xl">🎥</span>
                        <h2 className="font-bold text-grape-500 mt-2 mb-1 font-display">Object Detection Demo</h2>
                        <p className="text-grape-700 text-sm font-body">(Soon) Try advanced AI vision with YOLOv8.</p>
                    </div>
                    <div className="bg-gradient-to-br from-soft-100 to-soft-200 rounded-4xl p-6 shadow-glass border-2 border-accent-500">
                        <span className="text-3xl">📜</span>
                        <h2 className="font-bold text-accent-500 mt-2 mb-1 font-display">History & Collaboration</h2>
                        <p className="text-grape-700 text-sm font-body">Review past queries and agent responses anytime.</p>
                    </div>
                </div>
                <Link
                    to="/submit"
                    className="inline-block mt-10 px-10 py-4 bg-gradient-to-r from-teal-500 to-grape-500 text-white font-display text-xl rounded-4xl shadow-neon hover:scale-105 transition"
                >
                    Get Started
                </Link>
            </div>
        </section>
    );
}
