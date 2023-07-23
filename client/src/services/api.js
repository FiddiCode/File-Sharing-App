import axios from 'axios';

const apiUrl='https://fidshare-server.vercel.app';

export const uploadFile= async (data)=>{
    try {

      let response=await axios.post(`${process.env.SERVER}/upload`,data);
      console.log(response.data); 
      return response.data;
      
        
    } catch (error) {
        console.log("The error occured during running Api",error.message); 
    }
}