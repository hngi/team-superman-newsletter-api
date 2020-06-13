const mongoose=require('mongoose');

productSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String || undefined,
    content: String || undefined
});

module.exports=mongoose.model('News',productSchema);