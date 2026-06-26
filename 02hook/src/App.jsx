import { useState } from "react"

function App() {
   let [counter,setC]=useState(0);

   const add = () =>{
        if(counter==20){
          return;
        }
        setC(counter+1);
   }

   const remove = ()=>{
    if(counter==0){
      return ;
    }
    setC(counter-1);
   }
  
  return (
    <>
     <button onClick={add}>Increase</button>
     <br />
     {counter}
     <br />
     <button onClick={remove}>Decrease</button>
     </>
  )
  
}

export default App
