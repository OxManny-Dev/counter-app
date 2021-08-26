import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
export const ViewOne = () => {
  const [ todoText, setTodoText ] = useState('');
  console.log(todoText);
  return (
    <>
      <TextField
        label='Please enter your email address here'
        variant='outlined'
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
    </>
  )
};
export default ViewOne;

