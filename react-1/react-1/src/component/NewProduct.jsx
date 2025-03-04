import React from 'react'
import ProductForm from './ProductForm'

const NewProduct = (props) => {

  function saveproduct (data){
    console.log('i am sinside on new product', data)

    // calling parent function
    props.pranay(data)
  }
  return (
    <div>
       <ProductForm onSaveProduct = {saveproduct}/>
    </div>
  )
}

export default NewProduct