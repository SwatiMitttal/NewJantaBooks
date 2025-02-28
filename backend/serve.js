import express from 'express'
import cors from 'cors'
import dbcon from './database/db.js'
import { User ,Item} from './database/db.js'
import  pkg from 'razorpay'
import multer from 'multer'
const app=express()

const port=4001
app.use(cors())
