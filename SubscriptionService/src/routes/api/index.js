const { Router } =require ('express');
const subscribeRoutes =require ('./subscriptionRoute');

const router = Router();

router.use('/subscription', subscribeRoutes);
router.get('/', (req, res) => res.send('This is my index page'));

module.exports=router;
