import React from 'react';
// TODO: Create a `name` variable
export const name = 'Prometheus';
const thoughts = 'Prometheus is the best movie in the world!';
// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React
const thoughtsOnReact = 'I think angular is easier';
export const JSXVariables = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {name}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {name.length} letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>It's a fact that {thoughts}</h2>
          <h2>I think React {thoughtsOnReact}</h2>
        </div>
      </div>
    </div>
  );
}
export default JSXVariables;
