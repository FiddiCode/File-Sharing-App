import express from 'express'
import router from './Routes/route.js';
import cors from 'cors'
import dotenv from 'dotenv'
import DBConnection from './database/db.js'

const app=express();
dotenv.config();
const PORT=process.env.PORT || 8000;


app.use(cors());
app.use('/',router);


DBConnection();

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`); 
})