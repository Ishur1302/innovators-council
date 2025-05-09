import React, { useEffect, useState } from "react";
import api from "../api/api";
import QueryCard from "../components/QueryCard";
import { Query } from "../../../shared/types";

export default function ResultsHistory() {
    const [history, setHistory] = useState<Query[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        api.get("/api/queries/history")
            .then((res) => {
                // Handle both { history: [...] } and [...] responses
                if (Array.isArray(res.data.history)) {
                    setHistory(res.data.history);
                } else if (Array.isArray(res.data)) {
                    setHistory(res.data);
                } else {
                    setHistory([]);
                }
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message || "Failed to load history");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="text-primary-500 text-center font-display pt-28">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-500 text-center font-display pt-28">
                Error: {error}
            </div>
        );
    }

    return (
        <div className="pt-28">
            <h1 className="text-4xl font-extrabold font-display text-accent-500 mb-8 text-center">
                Results History
            </h1>
            <div className="bg-glass rounded-4xl shadow-3d p-8 mb-10 max-w-3xl mx-auto backdrop-blur-md border border-white border-opacity-40">
                <p className="text-dark-700 text-center font-body">
                    Review all your previous queries and the feedback provided by our AI agents. Click on a query to see detailed agent responses.
                </p>
            </div>
            {history.length === 0 ? (
                <div className="text-dark-700 text-center font-body">
                    No past queries available.
                </div>
            ) : (
                <div className="space-y-8">
                    {history.map((query) => (
                        <QueryCard key={query.id} query={query} />
                    ))}
                </div>
            )}
        </div>
    );
}
