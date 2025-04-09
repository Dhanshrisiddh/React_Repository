
import React from 'react'
import { Fragment }from 'react' 
// When we use Fragement we import Fragment like above 
const FragmentComp = () =>{
    return (
    //    <div>  ==================>>>> When we write multiple statement statement then we use div tag 
    // <React.Fragment>  =============>>> Instead of using div tag we can use React.Fragment 
    //    <Fragment> =========>>> We also use Fregment instead of react.fragment 
    <> 
    {/* Instead of all of we use <></>  && does not need to import like above 
    +  */}
             <h1>FragmentComp</h1>
             <h2>Second Statement </h2>
    </>
      //<Fragment>
    // </React.Fragment>
    //    </div>
        
    )
    
}

export default FragmentComp