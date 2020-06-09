import { Router } from 'express';
import subscribeRoutes from './subscribeRoute';
import authRoutes from './authRoute';

const router = Router();

router.use('/subscribe', subscribeRoutes);
router.use('/auth', authRoutes);
router.get('/', (req, res) => res.send('This is my index page'));
export default router;
