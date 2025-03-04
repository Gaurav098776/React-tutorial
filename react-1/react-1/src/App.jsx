import React from 'react'
import './App.css'
import Item from './component/Item'
import ItemDate from './component/ItemDate'
import Card from './component/Card'
import NewProduct from './component/NewProduct'

const App = () => {

  const response =[
    {
      itemName:'Nirma',
      itemDate:'20',
      itemYear:1998,
       itemMonth: 'June'
    },
    {
      itemName:'SurfExcel',
      itemDate:'20',
      itemMonth: 'June',
      itemYear:1998
    },
    {
      itemName:'555',
      itemDate:'20 June 1998',
      itemYear:2000,
      itemMonth: 'June'
    },
  ]

  function printProductdata (data){
    console.log('I am inside app',data );
  }

  return (
   <>
     <Card >
      <NewProduct pranay={printProductdata}/>
     <Item name = {response[0].itemName} />
     <ItemDate day= {response[0].itemDate} month={response[0].itemMonth} year = {response[0].itemYear}/>
     <Item name = {response[1].itemName} />
     <ItemDate day= {response[1].itemDate} month={response[1].itemMonth} year = {response[1].itemYear}/>
     <Item name = {response[2].itemName} />
     <ItemDate day= {response[2].itemDate} month={response[2].itemMonth} year = {response[2].itemYear}/>
     <h1 className='main'>hello ji</h1>
     </Card>
   </>
   
  )
}

export default App