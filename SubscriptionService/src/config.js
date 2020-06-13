let DB_URI = 'mongodb://ndubuisijr:Chukuigwe@node-rest-shop-shard-00-00-eewl4.mongodb.net:27017,node-rest-shop-shard-00-01-eewl4.mongodb.net:27017,node-rest-shop-shard-00-02-eewl4.mongodb.net:27017/microservice?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin&retryWrites=true&w=majority';

if (process.env.MONGO_DB_URI) {
  DB_URI = process.env.MONGO_DB_URI;
}

module.exports = {
  DB_URI
};