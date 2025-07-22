import React from 'react'

const JsxComponent = () => {

    let a=10 , b=20;

    return(
        <div>
            <h1>JsxComponent</h1>
            <h2>Addtion of two number = {a+b}</h2>
            <h2> {a>b? "A is greater" : "B is greater"} </h2>
        </div>
    )
}
export default JsxComponent








// import React from 'react'

// const JsxComponent = () => {
//     let a=10 , b=20 ;

//     return(
//         <div>
//             <h2>Jsx component</h2>
//             <h2>Addition of two number is :{a+b}</h2>
//             <h3>{a>b ? "a is greater" : "b is greater"}</h3>

//         </div>
//     );
// }
// export default JsxComponent;