import { Router } from 'express';
import subscribeRoutes from './subscrptionRoute';

const router = Router();

router.use('/subscription', subscribeRoutes);
router.get('/', (req, res) => res.send('This is my index page'));
export default router;
