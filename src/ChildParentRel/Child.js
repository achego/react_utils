import React from 'react'

const Child = ({name, sayHello}) => {
  
  return (
    <button onClick={() => sayHello(name)}>{name}</button>
  )
}

export default Child