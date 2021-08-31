import { useState, } from 'react';
export const Counter = (props) => {
  const [ nameInput, setNameInput ] = useState('');
  console.log('im rendering');
  return (
    <div>
      <h1>Counter: {props.counter}</h1>
      <input
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <button
        onClick={() => props.setCounter(props.counter + 1)}
      >Increment
      </button>
    </div>
  );
}
// class Counter extends Component {
//   state = {
//     counter: 0,
//   }
//   handleIncrement = () => {
//     this.setState({ counter: this.state.counter + 1});
//   }
//   render() {
//     return (
//       <div>
//         <h1>Counter: {this.state.counter}</h1>
//         <button
//           onClick={this.handleIncrement}
//         >Increment</button>
//       </div>
//     )
//   }
// }
export default Counter;
