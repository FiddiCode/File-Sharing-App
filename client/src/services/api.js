import axios from 'axios';

const apiURL=process.env.REACT_APP_SERV;


export const uploadFile= async (data)=>{
    try {
      console.log(apiURL);
      let response=await axios.post(`${apiURL}/upload`,data);
      console.log(response.data);  
      return response.data;
      
        
    } catch (error) {
        console.log("The error occured during running Api",error.message); 
    }
}