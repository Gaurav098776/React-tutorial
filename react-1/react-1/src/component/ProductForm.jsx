import React, { useState } from 'react'
import './ProductForm.css'

const ProductForm = (props) => {

  // const [fullProductInput, setFullProductInput] = useState({
  //   title: '',
  //   date: ''
  // })

  const [newTitle, setTitle] = useState('')
  const [newDate, setDate] = useState('')

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }
  const dateChangeHandler = (event) => {
    setDate(event.target.value) 
  }

  function submitHandler(event) {
    event.preventDefault();

    const productData  = {
      title: newTitle,
      date: newDate
    }
    props.onSaveProduct(productData);
    setDate('');
    setTitle('');
  }

  return (
    <form onSubmit={submitHandler}>
        <div className='new-product_title'>
             <label>Product Title</label>
              <input type='text' 
              value = {newTitle}placeholder='Enter Product Name' onChange={titleChangeHandler} />  
        </div> 
        <div className='new-product_date'>
          <label>Date</label>
          <input type="date" value = {newDate} min={'2025-01-04'} max={'2025-12-12'} onChange={dateChangeHandler} />
        </div>
        <div className='new-product_button'>
          <button type='submit'>Add Product </button>
        </div>
    </form>
  )
}

export default ProductForm