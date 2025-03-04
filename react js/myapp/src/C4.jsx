import React,{useContext} from 'react'
import { dataContext } from './Context'

const C4 = () => {
  const data = useContext(dataContext)
  return (
    <div>
      <h2>This is C4 component: {data.name},{data.age}</h2>
    </div>
  )
}

export default C4