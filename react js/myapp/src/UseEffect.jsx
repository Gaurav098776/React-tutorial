import React, { useEffect, useState } from 'react'

function UseEffect() {
  const[count,setCount]= useState(0);
  useEffect(()=>{
    console.log(count);
  },[count])
  return (
    <div>UseEffect
    <button onClick={()=>setCount(count+1)}>ok</button>
    </div>
  )
}

export default UseEffect