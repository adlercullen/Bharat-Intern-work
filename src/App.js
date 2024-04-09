
import './App.css';
import Table from './Components/Table';
import Criminal from './Components/Criminal';
import { useState } from 'react';

function App() {

  const sendData=async(object)=>{
    try{
    const response =await fetch("http://localhost:8080/post",{
    method: "Post",
    body: JSON.stringify(object),      
    headers:{
    "Content-Type":"application/json"}});
    const data=await response.json()
    return data;    
    }
    catch(error){
      console.log(error+"has ocuured")
    }
  
  }

  function getInfo(){
    fetch("http://localhost:8080/get").then(response=>{
      return response.json()
    }).then(data=>{
      newArr(data)
    })

  }

  const [current,Set]=useState(true)
  const [arr,newArr]=useState([{}])

  function changeReg(){
    Set(true)
  }
  function changeShow(){
    Set(false)

    getInfo();
    
  }

  const CriminalsData =async(Information)=>{
    const data= await sendData(Information)
    console.log(data);

    if(data){
      alert("added Successfully");
    }
    else{
      alert("Something is wrong");
    }

  }

  return (
    
    <>

<html lang="en">
<head>

<title>Navigation Bar</title>

</head>
<body>

<div class="navbar">
  <button id="registerBtn" class="active" onClick={changeReg} >Register</button>
  <button id="infoBtn" onClick={changeShow}   >Show Info</button>
</div>

</body>
</html>

   {current && <Criminal form={CriminalsData}/>}
   {!current && <Table criminalArray={arr}/>}
    </>
  );
}

export default App;
