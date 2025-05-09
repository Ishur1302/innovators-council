import React, { useState } from "react";
import api from "../api/api";

export default function QuerySubmission() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);
        try {
            const res = await api.post("/queries", { content: query });
            setResult(res.data);
            setQuery("");
        } catch {
            setResult({ error: "Failed to submit query." });
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-10 pt-24">
            <form
                onSubmit={handleSubmit}
                className="bg-glass shadow-3d rounded-5xl p-10 w-full max-w-xl border border-white border-opacity-40 backdrop-blur-md"
            >
                <h2 className="text-4xl font-bold text-primary-700 mb-6 text-center font-display">Submit a Query</h2>
                <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full p-4 border-2 border-primary-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-accent-100 font-body text-lg mb-4 transition"
                    rows={5}
                    placeholder="What's your innovative idea or question?"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-display text-lg py-3 rounded-3xl shadow-neon hover:scale-105 transition"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit"}
                </button>
                {result && (
                    <div className="mt-6">
                        {result.error ? (
                            <div className="text-red-500">{result.error}</div>
                        ) : (
                            <div className="bg-primary-100 border border-primary-300 rounded-3xl p-4 mt-2 font-body">
                                <div className="font-semibold text-primary-700 mb-2">Agent Feedback:</div>
                                <ul className="list-disc ml-5 text-dark-700">
                                    {result.feedback.map((f: string, idx: number) => (
                                        <li key={idx}>{f}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                )}
            </form>
            <div className="max-w-sm">
                <div className="bg-gradient-to-br from-accent-100 via-primary-100 to-gold-100 rounded-4xl shadow-glass p-8 border border-white border-opacity-40">
                    <h3 className="font-bold text-primary-500 mb-2 font-display">How it works</h3>
                    <ul className="list-disc ml-5 text-dark-700 text-base font-body">
                        <li>Write your question or idea clearly.</li>
                        <li>Submit to receive feedback from multiple AI agents.</li>
                        <li>Review responses and iterate on your innovation!</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
