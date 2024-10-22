const mongoose=require('mongoose')
const employeeSchema=mongoose.Schema({
    employeeId:String,
    employeeName:String,
    Designation:String,
    salary:Number,
    Department:String,
    Location:String,
})


const employeeData=mongoose.model('employee',employeeSchema);
module.exports=employeeData;