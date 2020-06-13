const express = require("express");
const path = require("path");
const app = express();
const cors=require('cors');
const hbs=require('express-handlebars');
const fetch=require('node-fetch');
const bodyParser=require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

app.engine('hbs',hbs({
  extname:'hbs',defaultLayout:'layout', layoutsDir:__dirname+'/views'
}));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname,'views')));

app.get("/", (req, res) => {
  fetch(`${process.env.NEWS_SERVER}/news`)
  .then(response =>response.json())
  .then(allNews => { 
    res.render('index',{
      title:"News page",
      data:allNews
    });   
  })
  .catch(err=> {
      console.log(err);
  });
});

app.post("/sendsubscription",(req,res)=>{
  let endpoint = `${process.env.SUBSCRIPTION_SERVER}/api/v1/subscription/subscribe`;
  fetch(endpoint,{
    method:"POST",
    body:JSON.stringify({email:req.body.email}),
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    }
  })
  .then(result=>{
    res.json({message:"subscription was sent out"});
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json({message:"subscription unsuccessful"});
  })
});

module.exports = app;