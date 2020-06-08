const express=require('express');
const router = express.Router();

router.post('/',(req, res, next)=>{
    product={
        name:req.body.name,
        content:req.body.price
    };
    res.status(201).json({
        message:"Handling POST requests to /products",
        product:product
    });
});


module.exports=router;