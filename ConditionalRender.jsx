// import React, { useState } from 'react'               //We take useState because in React a component does not remember values by itself between renders.
// import Login from './Login';
// import SignUp from './SignUp';

// const ConditionalRender = () => {

//     const[isLoggedIn, setIsLoggedIn] = useState(false);

//     // Your file contains four different ways to do conditional rendering,
//     //  but only one is active at a time. The others are commented out.
  
//     // 1.Conditional rendering using if else
//       if(isLoggedIn)
//         {
//           return <Login />;
//         } else 
//         {
//           return <SignUp />;
//         }

// //   2.Conditional rendering using variable
// // let tempCondition;
// // if(isLoggedIn){
// //     tempCondition = <Login />;
// // }else{
// //     tempCondition = <SignUp />;
// // }

// // return tempCondition;


// // 3.Conditional rendering using ternary operator
//     // return isLoggedIn ? <Login /> : <SignUp />;

// // 4.Conditional rendering using short circuit operator
//     // return isLoggedIn && <Login />;
// }


// export default ConditionalRender



import React,{useState}from 'react'
import Login from './Login';
import SignUp from './signUp';

const ConditionalRender = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if(isLoggedIn){
        return <Login/>
    } else{
        return <SignUp/>
    }

    
}