import React, { useState } from 'react'
import Employee2 from './Employee2';

const Employee = () => {
  let user = 'Mohit'
  let [city,setCity] = useState('Delhi')
  let cbfn = function(city){
    setCity(city)
    console.log('this is child component',city);
  }
  return (
    <div>
      <h1 >
      This is parent component {city}
      </h1>
       <Employee2 data2={cbfn}/>
    </div>
  )
}

export default Employee