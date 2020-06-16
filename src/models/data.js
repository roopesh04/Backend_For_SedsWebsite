const mongoose=require('mongoose')


const dataScheme=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        lowercase:true
    },
    phonenumber:{
        type:Number,
        trim:true
    },
    message:{
        type:String,
        trim:true
    }
},{
    timestamps:true
})

const Data=mongoose.model('Data',dataScheme)

module.exports=Data