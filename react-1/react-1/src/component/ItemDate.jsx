import React from 'react'
import './ItemDate.css'

const ItemDate = (props) => {  
  return (
    <div className='date'>
      <span>{props.day}</span>
      <span>{props.month}</span>
      <span>{props.year}</span>
    </div>
  )
}

export default ItemDate;