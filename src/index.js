const express=require('express')
require('./db/mongoose')
const dataRouter=require('./routers/upload')

const app=express()
const port=process.env.PORT || 3000

app.use(express.json())
app.use(dataRouter)

app.listen(port,()=>{
    console.log('Server is up on the port '+port)
})