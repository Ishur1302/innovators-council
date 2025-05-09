import React from "react";
import { Query } from "../../../shared/types";
import { format } from "date-fns";

interface QueryCardProps {
    query: Query;
}

const QueryCard: React.FC<QueryCardProps> = ({ query }) => (
    <div className="bg-glass rounded-4xl shadow-3d p-6 border-l-8 border-accent-500 max-w-2xl mx-auto font-body backdrop-blur-md border border-white border-opacity-40">
        <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-primary-500 font-display">Query #{query.id}</span>
            <span className="text-xs text-dark-700">{format(new Date(query.createdAt), "PPpp")}</span>
        </div>
        <div className="mb-2 text-dark-900">{query.content}</div>
        <div>
            <span className="font-semibold text-accent-500">Agent Feedback:</span>
            <ul className="list-disc ml-5 text-sm mt-1 text-dark-700">
                {query.feedback.map((f, idx) => (
                    <li key={idx}>{f}</li>
                ))}
            </ul>
        </div>
    </div>
);

export default QueryCard;
