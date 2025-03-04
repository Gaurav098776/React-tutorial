import React from 'react'

const Employee2 = (props) => {
  let city = "BHopal";
  
  return (
    <div>
      <h1>This is child component</h1>
      <button onClick={()=>{props.data2(city)}}>Send data: child to parent</button>
    </div>
  )
}

export default Employee2