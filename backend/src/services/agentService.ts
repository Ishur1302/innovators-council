import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MODEL_NAME = "gemini-1.5-flash"; // Or "gemini-1.0-pro" if you prefer

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY!);

async function geminiGenerate(prompt: string, persona: string): Promise<string> {
    try {
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().trim();
        return `${persona}: ${text}`;
    } catch (err: any) {
        console.error("Gemini API error:", err?.message || err);
        return `${persona}: Sorry, I couldn't generate a response at this time.`;
    }
}

export async function getAgentFeedback(content: string): Promise<string[]> {
    // Prompts tailored to each agent's persona
    const logicPrompt = `You are LogicBot, an expert in logical analysis. Analyze the following for logical soundness and reasoning:\n${content}\nLogicBot's analysis:`;
    const researchPrompt = `You are Researcher, an expert in factual research. Provide a factual, research-based answer to this question:\n${content}\nResearcher's answer:`;
    const creativePrompt = `You are CreativeAI, an expert in creative thinking. Respond creatively and imaginatively to this prompt:\n${content}\nCreativeAI's response:`;

    // Run all three in parallel for speed
    const [logicBot, researcher, creativeAI] = await Promise.all([
        geminiGenerate(logicPrompt, "LogicBot"),
        geminiGenerate(researchPrompt, "Researcher"),
        geminiGenerate(creativePrompt, "CreativeAI"),
    ]);

    return [logicBot, researcher, creativeAI];
}
