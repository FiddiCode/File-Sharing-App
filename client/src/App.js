import {useRef,useState,useEffect} from 'react';
import banner from './banner.jpg';
import './App.css';
import {uploadFile} from './services/api';

function App() {

  const [file,setFile]=useState('');
  const [result,setResult]=useState('');

  console.log(file);

  const fileInputRef=useRef();

  useEffect(()=>{
    const getImage= async ()=>{
       if(file){
        const data=new FormData();
        data.append("fileName",file.name);
        data.append("file",file);

       let response= await uploadFile(data);
       console.log('response',response);
       console.log('path',response.path);
       setResult(response.path);
       }
    }
    getImage();
  },[file]);

  const onUploadClick=()=>{
    fileInputRef.current.click();
  }

  return (
    <div className="container">
      <img src={banner} alt="banner" />
      <div className="wrapper">
        <h1>FidShare</h1>
        <p>Upload and Share The Download Link</p>
        <button onClick={onUploadClick}>Upload</button>
        <input type="file" ref={fileInputRef} style={{display:'none'}}  onChange={(e)=>setFile(e.target.files[0])}/>
          <div className='link'>
          <a href={result} target='_blank' rel="noreferrer">{result ? result :'Link will appear here'}</a>
        </div>
        </div>
    </div>
  );
}

export default App;
