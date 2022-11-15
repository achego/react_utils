import React from 'react'
import { Children } from 'react';

const Parent = ({children}) => {
    const sayHello = (name)=> {
        console.log(`Hello from ${name} child`);
    }

    const childrenWithProps = Children.map(children, child => {
        // Checking isValidElement is the safe way and avoids a
        // typescript error too.
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { sayHello });
        }
        return child;
      });
  return (
    <div>{childrenWithProps}</div>
  )
}

export default Parent