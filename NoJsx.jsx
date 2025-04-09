import React from 'react'

const NoJsx =() => {
    return (
        React.createElement('div',null,React.createElement('h1',null,'NoJsx'),
        React.createElement('h2',null,'Addition of two number =',10+30),
        React.createElement('h3',null,10>30? "A is Greater":"B is Greater"))

    )
}
export default NoJsx