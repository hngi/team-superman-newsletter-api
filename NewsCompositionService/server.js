const app = require("./src/app");

const { DB_URI } = require("./src/config/config")
const mongoose = require("mongoose");
const dotenv=require('dotenv');

dotenv.config();

mongoose.connect(DB_URI)
.then(result=>{
  console.log(result);
  console.log("connected to mongoDB successfully");
})
.catch(err=>{
  console.log(err);
  console.log("unable to connect to mongoDb");
});


app.listen(11002, () => {
  console.log("running on port 11002");
  console.log("--------------------------");
  console.log(process.env.SUBSCRIPTION_SERVER);
  console.log(process.env.NEWS_SERVER);
});
