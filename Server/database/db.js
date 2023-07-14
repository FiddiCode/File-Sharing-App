import mongoose from "mongoose";

const DBconnection=async ()=>{
    const MONGO_URL='mongodb+srv://FiddiCode:fileSharing@file-sharing-cluster.izew0z9.mongodb.net/?retryWrites=true&w=majority';
   try {
        await mongoose.connect(MONGO_URL,{useNewUrlParser:true});
        console.log('Database connected Successfully');
   } catch (error) {
     console.log('Error while connecting to database',error.message);
   }
}

export default DBconnection;
