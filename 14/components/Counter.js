import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // useState returns an array with 2 elements
  // the 1st element is the value being passed into useState
  // the 2nd element is a function for updating that value
  const [ count, setCount ] = useState(0);

  // TODO: Explain what is happening with this click handler
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // TODO: Explain what is happening with this click handler
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
