import File from "../model/file.js";

const uploadImage=async (req,res)=>{
    const fileObj={
        path:req.file.path,
        name:req.file.originalname
    }

    try {
    const file=await File.create(fileObj);
    res.status(201).json({path:`http://localhost:8000/file/${file_id}`})
 } catch (error) {
    console.log(error.message);
    res.status(500).json({error:error.message})
    
 }
}

const downloadImage=async (req,res)=>{
    try {
        const file=await File.findById(req.params);

        file.downloadContent++;

        await file.save();

        res.download(file.path,file.name);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({error:error.message});
        
    }
}

export  {uploadImage,downloadImage};