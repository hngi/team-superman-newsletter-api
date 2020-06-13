const app = require("./src/app");
const dotenv = require('dotenv');
dotenv.config();

app.listen(11003, () => {
  console.log("running on port 11003");
  console.log("--------------------------");
  console.log(process.env.NEWS_SERVER);
  console.log(process.env.SUBSCRIPTION_SERVER);
});