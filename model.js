//install mongoose
//import mongoose
import mongoose from "mongoose";

//Schema creation
let stdschema=mongoose.Schema({
    sname:String,
    sage:Number,
    sdept:String
})

// let stdmodel=mongoose.model("collection name", schemaName)

let stdmodel=mongoose.model("student",stdschema)

export default stdmodel;