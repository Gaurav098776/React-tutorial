import React,{useContext} from 'react'
import { Consumer } from './Context'
const C3 = () => {
  const data =  useContext(Consumer)
  return (
    <div>
      <h3>This is C4:{data.name}</h3>
    </div>
  )
}

export default C3