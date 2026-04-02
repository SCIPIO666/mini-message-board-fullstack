const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
const app=express()
const port=process.env.PORT
const host=process.env.HOST


















app.listen(port,host,()=>{
    console.log(`server listening on http://${host}:${port}`)
})