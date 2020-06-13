const express =require ('express');
const index=require ('./api');

const router = express.Router();

router.use('/api/v1/', index);

module.exports= router;
