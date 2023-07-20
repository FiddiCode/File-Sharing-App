import mongoose from "mongoose";

const DBconnection=async ()=>{
    
   try {
        await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true});
        console.log('Database connected Successfully');
   } catch (error) {
     console.log('Error while connecting to database',error.message);
   }
}

export default DBconnection;