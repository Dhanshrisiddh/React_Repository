
import ChildFunc from './ChildFunc';
import React from 'react';


const ParentFun = ()=>{

const remFee=20000;

    return(
        <>
            <h1>Welcome to ParentFun Component </h1>ParentFun
            <ChildFunc fee={remFee}/>
        </>
    )
}
export default ParentFun;