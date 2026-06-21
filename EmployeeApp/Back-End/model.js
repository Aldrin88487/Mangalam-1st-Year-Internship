import mongoose from "mongoose";

let empSchema=mongoose.Schema({
    ename:String,
    eage:Number,
    esalary:Number
})

let empModel=mongoose.model('employee',empSchema)

export default empModel