import React from 'react'
import { Consumer } from './Context'

const C1 = () => {
  return (
    <div>
      <h1>this is c1 component</h1>
     <Consumer>
      {
        (value)=>{
          return(
            <>
              <h4>{value.name}</h4>
            </>
          )
        }
      }
     </Consumer>
    </div>
  )
}

export default C1