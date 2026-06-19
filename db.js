// import mongoose
import mongoose from "mongoose";

// to connect db
mongoose
    .connect("mongodb://pest:pest@ac-zprujha-shard-00-00.x7yline.mongodb.net:27017,ac-zprujha-shard-00-01.x7yline.mongodb.net:27017,ac-zprujha-shard-00-02.x7yline.mongodb.net:27017/StdDB?ssl=true&replicaSet=atlas-812h6h-shard-0&authSource=admin&appName=Cluster0")
    .then(()=>{console.log("Connected to DB")})
    .catch((err)=>{console.log(err)})
