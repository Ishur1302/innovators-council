import { Router } from 'express';
import { submitQuery, getQueryHistory } from '../controllers/queriesController';

const router = Router();

router.post('/', submitQuery);
router.get('/history', getQueryHistory);

export default router;
