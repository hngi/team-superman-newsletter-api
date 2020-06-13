// Setup Express
const express=require('express');
const app=express();
const index=require('./routes/index');
const cors=require('cors');

//Setup morgan
const morgan=require('morgan');

//Setup body-parser
const bodyParser=require('body-parser');
app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Enable cors

//middleware pipeline for sending Email
app.use("/sendemail", index);

//Error Handling
app.use((req, res, next)=>{
    const error = new Error("Not found");
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500).json({
        error:{
            message:error.message
        }
    });
});

module.exports=app;