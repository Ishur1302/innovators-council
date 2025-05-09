import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import queriesRouter from './routes/queries';
import yoloRouter from "./routes/yolo";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", yoloRouter);
app.use('/api/queries', queriesRouter);

app.get('/', (req, res) => {
    res.send('Innovators Council Backend API');
});

export default app;
