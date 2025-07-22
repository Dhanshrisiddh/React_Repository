// import React from 'react'

// const FragmentComp = () => {
//   return (
//     <React.Fragment>
//       <h2>Fragment Componenet</h2>
//       <h3>Second Statement</h3>
//     </React.Fragment>
//   )
// }

// export default FragmentComp

            //   OR <> </> for fragment

import React from 'react'
import { Fragment } from 'react'        // use for multiple times fragment , we import it and used it

const FragmentComp = () => {
  return (

    <Fragment>
      <h2>Fragment Componenet</h2>
      <h3>Second Statement</h3>
    </Fragment>
  )
}

export default FragmentComp
