import React from 'react'
// import {useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

  const data = useLoaderData()
  // const [data,setData]=useState([])
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/abhishek1850")
  //   .then((res)=>res.json())
  //   .then((data)=>setData(data))
  // },[])

  return (
    <div>
     <h1 className='text-white bg-gray-700 flex justify-center p-5 m-4'>GitHub Followers :{data?data.followers:"loading....."} 
       
     </h1>
     <img src={data?.avatar_url} width={300} alt='git IMG' />
    </div>     
  )
}

export default Github


export const githubLoaderData = async ()=>{
  const response = await fetch("https://api.github.com/users/abhishek1850")
  return response.json()
}