
import mongoose, { connect } from 'mongoose'


const dbcon= async ()=> {

try{
     await  connect('mongodb+srv://swatimittal1981:u0j8DJC9TotKizIq@cluster0.120fk.mongodb.net/',{
        dbName:'Nstore',})
     console.log('Database connected')
}catch(error){
    console.log(error.message)
}}


const uSchema=mongoose.Schema({
    email:{
      required:true,
      
      type:String
    },
    passw:String,
    mobile:{
    required:true,
    type:String},
    name:String,
    add1:String,
    add2:String,
    city:String,
    
    state:String,
    country:String,
    pin:String

})

const iSchema=mongoose.Schema({
     
    cat:String,
      slug:String,
     price:String,
     imgurl:String,
     img2:String,
     note:String,
     rating:String,
      img:String,
      disc:String
     
     
})

const sSchema=mongoose.Schema({
     
    cat:String,
      slug:String,
     price:String,
     imgurl:String,
     note:String,
     rating:String,
      img:String,
      disc:String
     
     
})


const oSchema=mongoose.Schema({
    email:String,
    citems:Array,
    tamt:String,
    date:Date

})



 export const User=mongoose.model('user',uSchema)
 export const Item=mongoose.model('item',iSchema)
 export const Order=mongoose.model('order',oSchema)
 export const Sitem=mongoose.model('sitem',sSchema)
export default dbcon