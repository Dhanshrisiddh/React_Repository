
import React from 'react'
import GrandChildFun from './GrandChildFun';


const ChildFunc = (props) => {
    return(

        <>
        <h1>Welcome to ChildFunc Component </h1>
         <h2>Remaining Fee:{props.fee}</h2>
         <GrandChildFun fee= {props.fee}/>
        
        </>

    )
        
    }

export default ChildFunc