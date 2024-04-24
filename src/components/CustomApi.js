import React,{useState,useEffect} from 'react'

const CustomApi = () => {
 const[advice,setAdvice]=useState("");
 useEffect(()=>{
  const url="https://api.adviceslip.com/advice";
  const fetchData=async()=>{
   try{
     const response=await fetch(url);
     const json=await response.json();
     console.log("data");
   }catch{
   console.log("error");
   }               
   } 
   fetchData();                
  },[]);                 
 
  return (
    <div><h2>{advice}</h2></div>
  )
}

export default CustomApi