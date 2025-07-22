import React from 'react'

const NoJsx = () => {
  return (
    React.createElement('div',null, React.createElement('h1',null,'NoJsx'),
    React.createElement('h2',null,'Addition of two numbers =', 20+30),
    React.createElement('h3',null, 20>30 ? "A is greater" : "B is greater"))
  )
}

export default NoJsx
