import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';

export const ViewOne = () => {

  return (
    <>
      <Container>
        <TextField
          label='Please enter your email address here'
          variant='outlined'
        />
      </Container>

    </>
  )
};


export default ViewOne;

