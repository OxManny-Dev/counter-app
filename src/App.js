import { useState, } from 'react';
import {
  ListRenderer,
  JSXVariables,
} from './components';


import Alert from './components/Alert';
import Counter from './components/Counter';
import { todos } from './todo';

const message = 'Invalid user id or password';
const alertType = "warning"
// const Hello = () => <h1>Hello World</h1>;
export const App = () => {
  const [ counter, setCounter ] = useState(0);
  console.log('Rendering inside of app');
  return (
    <div>
      <Alert counter={counter}/>
      <Counter
        counter={counter}
        setCounter={setCounter}
      />
    </div>
  )
};
export default App;


// import React from 'react'
// // // Class based component
// class Hello extends React.Component {
//   render() {
//     return <h1>Hello World</h1>;
//   }
// }
// Functional component
