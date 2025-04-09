
import React from 'react' 

const JsxComponent = () => {
    let a=10, b=30;

    return (
        <div>
            <h1>JsxComponent</h1>
            <h2>Addition of two number = {a+b}</h2>
            <h3>{a>b ? "A is Greater":"B is Greater"}</h3>
        </div>
    )
}

export default JsxComponent;
 

