import React from 'react'

function Post() {

  let data = [{name:'a',city:'bhopal'}]
  // console.log(data);   {/* data read nhi krega  */}

  // for(let i=0 ;i< data.length; i++){
  //   console.log(data[i].name);
  // }
  

  return (
    <div>
      {/* {data}   { /*  jsx me loop work nhi krte*/ } 

      {
        data.map(function(currE,index){
          console.log(currE.name,currE.city);
          return(
            <div>
              <table  border='2'>
                <thead>
                  <tr>
                    <th>name</th>
                    <th>city</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{currE.name}</td>
                    <td>{currE.city}</td>
                  </tr>
                </tbody>
              </table>
              <p>{currE.name}</p>
              <p>{currE.city}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Post