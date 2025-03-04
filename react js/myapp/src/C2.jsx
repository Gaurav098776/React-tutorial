import React from 'react'
import { Consumer } from './Context'

const C2 = () => {
  return (
    <div>
      <Consumer>
        {
          (store)=>{
            return(
              <>
                <h4>{store.name}</h4>
              </>
            )
          }
        }
      </Consumer>
    </div>
  )
}

export default C2