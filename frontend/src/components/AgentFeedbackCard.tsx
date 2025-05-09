import React from "react";

interface AgentFeedbackCardProps {
    name: string;
    feedback: string;
    avatar: string;
    color: string;
    description: string;
}

const AgentFeedbackCard: React.FC<AgentFeedbackCardProps> = ({
                                                                 name,
                                                                 feedback,
                                                                 avatar,
                                                                 color,
                                                                 description,
                                                             }) => (
    <div
        className="rounded-4xl shadow-3d p-8 flex flex-col items-center border-2 border-white bg-glass backdrop-blur-md"
        style={{
            borderColor: color,
        }}
    >
        <img
            src={avatar}
            alt={name}
            className="w-24 h-24 rounded-full mb-4 border-4"
            style={{ borderColor: color }}
        />
        <h3 className="font-extrabold text-2xl mb-2 font-display" style={{ color }}>
            {name}
        </h3>
        <p className="text-center text-dark-700 italic mb-2 font-body">{feedback}</p>
        <p className="text-dark-700 text-sm text-center font-body">{description}</p>
    </div>
);

export default AgentFeedbackCard;
