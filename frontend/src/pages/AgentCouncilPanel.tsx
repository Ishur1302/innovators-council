import React from "react";
import AgentFeedbackCard from "../components/AgentFeedbackCard";

const agents = [
    {
        name: "LogicBot",
        feedback: "Analyzing queries for logical consistency and structure.",
        avatar: "/avatars/logicbot.png",
        color: "#6366f1", // primary-500
        description: "Provides logical analysis and checks for contradictions or flaws in reasoning.",
    },
    {
        name: "Researcher",
        feedback: "Providing references and factual insights.",
        avatar: "/avatars/researcher.png",
        color: "#ec4899", // accent-500
        description: "Backs up answers with data, articles, and research papers.",
    },
    {
        name: "CreativeAI",
        feedback: "Suggesting creative improvements to your ideas.",
        avatar: "/avatars/creativeai.png",
        color: "#fbbf24", // gold-400
        description: "Adds out-of-the-box thinking, new angles, and creative inspiration.",
    },
];

export default function AgentCouncilPanel() {
    return (
        <div className="pt-28">
            <h1 className="text-4xl font-extrabold font-display bg-gradient-to-r from-primary-500 to-accent-500 text-transparent bg-clip-text mb-12 text-center">
                Agent Council Panel
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {agents.map((agent) => (
                    <AgentFeedbackCard key={agent.name} {...agent} />
                ))}
            </div>
            <div className="mt-12 text-center text-dark-700 font-body">
                <p>
                    Each agent brings a unique perspective. Together, they help you refine your ideas and get the best results!
                </p>
            </div>
        </div>
    );
}
