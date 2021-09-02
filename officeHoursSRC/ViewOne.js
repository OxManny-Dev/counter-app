import { useState, useEffect, } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import axios from 'axios';
export const ViewOne = (props) => {
  const [ todoText, setTodoText ] = useState('');
  const [ todos, setTodos ] = useState([]);
  //1st param is function to call after we return html
  // and it's only called 1 time
  //2nd param is an array of elements to listen for changes for
  // Whenever a value inside of the array is changed, the 1st parameter which the function will be called again
  // Component will unmount
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        // console.log(response.data);
        setTodos(response.data);
      })
      .catch(e => {
        console.log(e);
      })
    // console.log('I AM INSIDE OF USE EFFECT');
    // When component leaves the page, this function will be called
    // return () => {
    //   console.log('I AM LEAVING!!!');
    // }
  }, [  ]);
  console.log('i am rendering');
  return (
    <>
      <h1>Counter: {props.counter}</h1>
      <TextField
        fullWidth
        label='Please add a todo'
        variant='outlined'
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button
        color='primary'
        variant='contained'
        fullWidth
        onClick={() => {
          const newTodos = [ ...todos, todoText ];
          setTodos(newTodos);
          setTodoText('');
        }}
      >
        Add todo
      </Button>
      <Grid container>
        <Grid item xs={12}>
          {
            todos.length === 0 ?
              <h1>No todos yet</h1>
              :
              todos.map(todo => {
                return <h1>{todo.title}</h1>
              })
          }
        </Grid>
      </Grid>
    </>
  )
};
export default ViewOne;

