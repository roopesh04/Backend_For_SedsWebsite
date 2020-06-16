const express=require('express')
const Data=require('../models/data')
const router=new express.Router()

router.post('/',async(req,res)=>{
    const data=new Data(req.body)

    try{
        await data.save()
        res.status(201).send()
    }catch(e){
        res.status(400).send()
    }
})

module.exports=router