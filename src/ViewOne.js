import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
export const ViewOne = () => {
  const [ todoText, setTodoText ] = useState('');
  const [ todos, setTodos ] = useState([]);
  return (
    <>
      <TextField
        fullWidth
        label='Please enter your email address here'
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
                return <h1>{todo}</h1>
              })
          }
        </Grid>
      </Grid>
    </>
  )
};
export default ViewOne;

