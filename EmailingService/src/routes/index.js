const express=require('express');
const fetch=require("node-fetch");
const nodemailer = require("nodemailer");
const { response } = require('express');
const { json } = require('body-parser');
const router=express.Router();


router.post("/", (req,res)=>{
    const news={
        name:req.body.name,
        content:req.body.content
    };
    console.log(news);
    // Get all subscribers
    const endpoint=`${process.env.SUBSCRIPTION_SERVER}/api/v1/subscription/active`;
    fetch(endpoint)
    .then(res=>res.json())
    .then(json=>{
        console.log(json);
        if(json.status == 200){
        // All receivers emails are listed here
        console.log("got subscriptions for subscription service");
        let mail_array = json.data;
    
        let emailPromiseArray = [];    
        // Preparing the email for each receiver
        for (let i = 0; i < mail_array.length; i++) {
            emailPromiseArray.push(
                sendMail({
                    from: "teamspiderman5@gmail.com",
                    to: mail_array[i].email,
                    subject: "Superman Newsletter",
                    text: news.content
                })
            );
        }
    
        // Run the promise
        Promise.all(emailPromiseArray).then((result)=>{
            console.log("all mail sent");
        }).catch((error)=>{
            console.log(error);
        });

        res.json({
            message:"sent to all emails"
        });
        console.log("emails were sent");
        }
        else{
            res.json({
            message:"No emails were sent"
            });
            console.log("emails were not sent");
        }
    })
    .catch(err=>{
        console.log(err);
        console.log("error getting subscribers");
    })
});

//Created a useable Transporter object using Gmail    
let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "teamspiderman5@gmail.com", // Email created for the task
        pass: "Node1234"
    }
});

function sendMail(mail){

    return new Promise((resolve, reject)=>{
        transporter.sendMail(mail, function(error, response){
    if(error){
        console.log(error);
        reject(error);
    }else{
        console.log("Message sent: " + JSON.stringify(response));
        resolve(response);
    }

    transporter.close();
        });
    });
}

module.exports=router;