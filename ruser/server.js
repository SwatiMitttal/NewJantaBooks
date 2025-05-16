import express from 'express'
import cors from 'cors'
import dbcon from './database/db.js'
import { User ,Item,Order,Sitem} from './database/db.js'
import  pkg from 'razorpay'
import multer from 'multer'

const app=express()

const port=process.env.PORT || 4007
app.use(cors())

dbcon()
const {Razorpay}=pkg
app.use(express.json())

app.get('/',(req,res)=>{
   res.send('hello')})

app.listen(port,()=>{
    console.log('App is listening',port)
})





app.post('/ruser',cors(),async(req,res)=>{
    const {email}=req.body
    console.log('remove account',email)
    try{
        const  res1=await  Item.deleteOne({email:email}) 
          console.log(res1)
          res.status(200).json('deleted')
       
        }catch(e){
        console.log(e.message)
    }
})







        