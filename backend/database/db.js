import mongoose, { connect,Schema } from 'mongoose'


const dbcon= async ()=> {

try{
     await  connect('mongodb+srv://swatimittal1981:u0j8DJC9TotKizIq@cluster0.120fk.mongodb.net/',{
        dbName:'Nstore',})
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
    state:String,
    country:String,
    pin:String

})

const iSchema=mongoose.Schema({
     
    cat:String,
      slug:String,
     price:String,
     imgurl:String,
     note:String,
     rating:String,
     
})



 export const User=mongoose.model('user',uSchema)
 export const Item=mongoose.model('item',iSchema)
export default dbcon