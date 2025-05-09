import { Request, Response } from 'express';
import { getAgentFeedback } from '../services/agentService';
import { Query } from '../models/Query';

const queries: Query[] = [];

export const submitQuery = async (req: Request, res: Response) => {
    const { content } = req.body;
    const id = (queries.length + 1).toString();
    const feedback = await getAgentFeedback(content);
    const query: Query = {
        id,
        content,
        createdAt: new Date(),
        feedback,
    };
    queries.unshift(query);
    res.status(200).json(query);
};

export const getQueryHistory = (req: Request, res: Response) => {
    res.status(200).json({ history: queries });
};
