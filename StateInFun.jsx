import React, { useState } from 'react'

const StateInFun = () => {
    
    const name = "Umesh";

    // const[state name, function name to chnage state] = useState(initial value)

    const[userName, setUserName] = useState("Umesh");


    const changeUserName = () => {
      console.log(userName);
        setUserName("Umesh Bichukale");
        
    }
  return (
    <>
        <h2>State in Function Component</h2>
        <h3> Name Value using Normal Variable: {name}</h3>

        <h3> User Name Value using State: {userName}</h3>

        <button onClick={changeUserName}> Change UserName</button>
    
    </>
  )
}

export default StateInFun