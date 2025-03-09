import express from 'express'
import cors from 'cors'
import dbcon from './database/db.js'
import { User ,Item,Order} from './database/db.js'
import  pkg from 'razorpay'
import {} from 'serverless-http'
import multer from 'multer'

const app=express()

const port=process.env.PORT || 4001
app.use(cors())

dbcon()
const {Razorpay}=pkg

/*var instance = new pkg({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

const adduser=(fname,sid)=>{
    !ousers.some(user=>user.fname===fname) && ousers.push({fname,sid})
}

const ruser=(sid)=>{
    ousers.filter(user=>user.sid!==sid)
}

const addnuser=(fname,sid)=>{
    ousers.push({fname,sid})

}

const getuser=(fname)=>{
    return ousers.find(user=>user.fname===fname)
}
io.on('connection',(socket)=>{
     console.log('someone has connected') 
     console.log(socket.id,ousers)
     socket.on('nuser',(fname)=>{
       addnuser(fname,socket.id)
     })

     socket.on('disconnect',()=>{
        console.log('someone has disconnected')
     })
})*/

app.use(express.json())

app.get('/',(req,res)=>{
   res.send('hello')})

app.listen(port,()=>{
    console.log('App is listening',port)
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      return cb(null,Date.now()+file.originalname)}
})
const upload = multer({storage:storage })



app.get('/login',async (req,res)=>{
    const {email}=req.body;
    console.log(email);
    try{
    const user1= await User.findOne({email:email})
    res.json(user1)}
    catch(e){
        console.log(e)
    }
})



app.post('/aitem',upload.single('img'),async(req,res)=>{
    
    const {note,slug,price,cat,name}=req.body
    const img1=req.file.filename
    console.log(req.file)
   
    const nitem={ cat:cat,slug:slug,
       price:price,
       slug:name,
       note:note,
       rating:4,
       cat:cat,
       img:img1
      }
      try{
        await Item.insertMany([nitem])
        res.status(200).json('success')
        }
     catch(e){
        console.log(e.message)
     }   

})

app.post('/login',cors(), async (req,res)=>{
    console.log("LOGIN",req.body)
    const {email}=req.body
    if (!email ){
        res.status(400).send('pls enter the required fields')
    }
    else{
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
}
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
        pin:pin
    }
 try{
    await User.insertMany([user1])
    }
 catch(e){
    console.log(e.message)
 }   
})
app.get('/items',async (req,res)=>{
   
    try{
    const item1= await Item.find()
    console.log(item1[1])
    
    res.status(200).json(item1)
}
    catch(e){
        console.log(e)
    }
})
app.post('/orders',cors(),async(req,res)=>{
    const{tamt,aitems,email}=req.body
    
    const order1=new Order({
        tamt:tamt,
        citems:aitems,
        email:email,
        date:Date.now()
    })
    try{
        await order1.save()
        }
     catch(e){
        console.log(e.message)
     }   

})

app.post ('/corders',cors(),async(req,res)=>{
    const {email}=req.body
    console.log(email)
    try{
    const orders= await Order.find({email:email})
    console.log(orders)
    if(orders.length>0){
        res.status(200).json(orders)
    }else{
        res.json('no orders')
    }}catch(e){
        console.log(e.message)
    }
})
app.post('/items',cors(), async (req,res)=>{
    const {cat}=req.body
     try{
    const check=await Item.find({cat:cat})
    if (check.length>0){
        res.status(200).json(check)
       
    }
    else{
       res.json('notexist') }
    }
 catch(e){
    console.log(e.message)
 }   
  })



