import { useState } from 'react'
 
function App() {
  const [color,setColor] = useState("violet")
  
  return (
    <>
       <div className="relative  flex justify-center flex-wrap items-center h-screen" 
       style={{backgroundColor:color}}>
         <div className="absolute flex h-10 w-full flex-wrap justify-center items-center bg-white p-3 mx-10  rounded-full bottom-10 gap-20">
          <div onClick={()=>setColor("red")}
           className="bg-red-500 h-5 w-10 rounded-xl"> </div>
             <div onClick={()=>setColor("green")} className="bg-green-500 h-5 w-10 rounded-xl">  </div>
               <div onClick={()=>setColor("yellow")} className="bg-yellow-500 h-5 w-10 rounded-xl"></div>
              

         



         </div>
       </div>
     
    </>
  )
}

export default App
