import express from 'express'
import router from './Routes/route.js';
import cors from 'cors'

const app=express();
const PORT=process.env.PORT || 8000


app.use(cors());
app.use('/',router);


app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`); 
})