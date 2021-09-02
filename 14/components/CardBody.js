import React from 'react';

// TODO: Add a comment explaining what is being passed to this "child" component as props

const Button = (props) => {
  return <button
    className={props.className}
    onClick={props.onClick}
    type={props.type}
  >
    { props.children }
  </button>
}

function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {props.count}</p>
      <Button
        type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}
      >
        Increment
      </Button>{' '}
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}




export default CardBody;
