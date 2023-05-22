const mongoose=require("mongoose")
mongoose.connect("mongodb://ManeeshaDubey:07N34vYSSKQNJebI@ac-jtf6iho-shard-00-00.e4ejjtc.mongodb.net:27017,ac-jtf6iho-shard-00-01.e4ejjtc.mongodb.net:27017,ac-jtf6iho-shard-00-02.e4ejjtc.mongodb.net:27017/?ssl=true&replicaSet=atlas-1ciphg-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(()=>{
    console.log("Mongo db connected")
})
.catch(()=>{
    console.log("failed")
})

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("collection1",LoginSchema)
module.exports=collection