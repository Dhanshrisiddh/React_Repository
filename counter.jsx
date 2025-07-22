import React, { useState } from 'react'

const Counter = () => {

    const[count, setCount] = useState(0);


    const incrementCount = () =>{
        console.log('Inside Increament count');
        setCount(count+1)
    }

  return (
    <>
        <h3>Count Value is : {count}</h3>

        <button onClick={incrementCount} >Increment Count</button>
    </>
  )
}

export default Counter