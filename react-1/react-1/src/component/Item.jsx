import React, { useState } from 'react'
import './Item.css'


const Item = (props) => {
  const [name, Setname] =  useState(props.name)

  function changeTitle(){
    console.log('clicked')
    Setname('popcorn')
  }
  return (
    <>
      <div className='nirma' >{name}</div>
      <button onClick={changeTitle}>Add to cart</button>
    </>
  )
}

export default Item