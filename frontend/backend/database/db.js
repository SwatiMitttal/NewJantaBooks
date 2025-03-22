
import mongoose, { connect,Schema } from 'mongoose'
const dbcon= async ()=> {

try{
    await connect('mongodb+srv://swatinewjvite2:<swatinewjvite2>@cluster0.3rvfi.mongodb.net/',{
    // await  connect('mongodb+srv://swatimittal1981:u0j8DJC9TotKizIq@cluster0.120fk.mongodb.net/',{
        dbName:'Nstore1',})
     console.log('Database connected')
}catch(error){
    console.log(error.message)
}}
const uSchema=mongoose.Schema({
    email:String,
    passw:String,
    mobile:String,
    name:String,
    add1:String,
    add2:String,
    city:String,
    tate:String,
    country:String,
    pin:String})

const iSchema=mongoose.Schema({
     cat:String,
      slug:String,
     price:String,
     imgurl:String,
     note:String,
     rating:String,
      img:String
     
     
})
const imSchema=mongoose.Schema({
  img:String

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
 
export default dbcon