import React from 'react'

//object create
export const dataContext =  React.createContext()
//2 variable provider or consumer
export const Provider = dataContext.Provider    // default method
export const Consumer =  dataContext.Consumer

const Context = () => {
  return (
    <div>Context</div>
  )
}

export default Context