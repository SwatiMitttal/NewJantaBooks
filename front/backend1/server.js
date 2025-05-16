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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, '../public/uploads')
    },
    filename: function (req, file, cb) {
      return cb(null,file.originalname)}
})
const upload = multer({storage:storage })
app.get('/login',async (req,res)=>{
    const {email}=req.body;
    console.log(email);
    try{
    const user1= await User.findOne({email:email})
    res.status(200).json(user1)
}
    catch(e){
        console.log(e)
    }})



app.post('/login',cors(), async (req,res)=>{
   const {email}=req.body
    
   try{
    const check=await User.findOne({email:email})
    if (check){
        console.log('found',email)
        res.status(200).json(check) }
    else{
       res.status(404).json('notexist')
    }}
 catch(e){
    console.log(e.message)
 } }

 ) 
app.post('/signup',cors(), async (req,res)=>{
    const {name,email,passw,mobile,add1,add2,city,stat,country,pin}=req.body
console.log('CART MAIL IS: ',email)
    const user1={
        name:name,
        email:email,
        passw,passw,
        mobile:mobile,
        add1:add1,
        add2:add2,
        city:city,
        stat:stat,
        country:country,
        pin:pin}
 try{
    await User.insertMany(user1)
    console.log(user1)
    res.status(200).json('item added')
    }catch(e){
    console.log(e.message)
 }   
})
app.get('/items',async (req,res)=>{
   try{
    const item1= await Item.find()
    console.log(item1[3])
    res.status(200).json(item1)
}
catch(e){
        console.log(e)}})

app.get('/sitems',async (req,res)=>{
    try{
     const item1= await Sitem.find()
     console.log(item1[3])
     res.status(200).json(item1)
 }
 catch(e){
         console.log(e)
     }
 })
app.post('/orders',cors(),async(req,res)=>{
    const{tamt,items,email}=req.body
    console.log(items[0])
    const order1=new Order({
        tamt:tamt,
        citems:items,
        email:email,
        date:Date.now()
    })
    try{
        await order1.save()}
     catch(e){
        console.log(e.message)
     }   

})
app.post('/items',cors(), async (req,res)=>{
    const {cat}=req.body
    console.log(cat)
    try{
    const check=await Item.find({cat:cat})
    if (check){
        console.log(check)
        res.status(200).json(check)}
    else{
       res.json('notexist') }
    }
 catch(e){
    console.log(e.message)
 }   
  })

  app.post('/items',cors(), async (req,res)=>{
    const {slug}=req.body
    try{
    const check=await Item.find({slug:slug})
    console.log(check)
    if (check){
        res.status(200).json(check)} }
 catch(e){
    console.log(e.message)
 }   
  })

  app.post('/corders',cors(),async(req,res)=>{
    const {email}=req.body
    console.log(email)
    try{
   const orders=await Order.find({email:email})
   if (orders.length>0){
       res.status(200).json(orders)}
   else{
      res.json('notexist') }
   }
catch(e){
   console.log(e.message)
}   
  })


app.post('/ritems',cors(),async(req,res)=>{
    const {ritems}=req.body
    console.log(ritems)
    try{
        const  res1=await  Item.deleteOne({_id:ritems[0]}) 
          console.log(res1)
          res.status(200).json('deleted')
       
        }catch(e){
        console.log(e.message)
    }
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


app.post('/aitems',upload.single('img'),async(req,res)=>{
    const {slug,price,note,rating,cat,disc,url,cbot}=req.body
   
    const inam=req.file.filename
   const ext=inam.split('.')[1]
    const fname=url+'.'+ext
    console.log(url)
   
    console.log(fname)
    const nimg={ 
        slug:slug,
        imgurl:`https://res.cloudinary.com/dsttk9lau/image/upload/v1744778904/${fname}`,
        cat:cat,
        price:price,
        note:note,
        rating:rating,
        disc:disc,
        cbot:cbot
    }
    console.log("Item added",nimg)
      try{
        await Item.insertMany([nimg])
        res.status(200).json('success')
        }
     catch(e){
        console.log(e.message)
     }  })




        