const express = require("express");
const path = require("path");
const app = express();
const fetch = require("node-fetch");
const mongoose=require("mongoose");
const News=require("./models/news");
const bodyParser=require('body-parser');
const cors=require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// EXPRESS STATIC MIDDLEWARE - TO SERVE THE FILES IN PUBLIC DIR
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.get("/news",(req, res)=>{
  News.find()
  .exec()
  .then(docs=>{
    console.log("Retrieved all newsletters");
    res.status(200).json(docs);
  })
  .catch(err=>{
      console.log(err);
      res.status(500).json({
          error:err
      });
  });
});

app.post("/email",(req,res)=>{

console.log(req.body);
  const _news = new News({
    _id: new mongoose.Types.ObjectId(),
    name:req.body.name,
    content:req.body.content
});

_news.save()
.then(result=>{ 
    res.status(201).json({
      message:"News saved successfully"
    });

    fetch(`${process.env.EMAILING_SERVER}/sendemail`, {
      method: 'POST',
      body: JSON.stringify({
        name:_news.name,
        content:_news.content
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    console.log(result);
    console.log("news saved successfully");
    console.log("calls to send email has been sent");
  })
  .catch(err=>{
      console.log(err);
      res.status(500).json({
        error:err
      });
  });
});

module.exports = app;