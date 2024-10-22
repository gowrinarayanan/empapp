const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})
const userModel=mongoose.model('userdata',userSchema);
module.exports=userModel;