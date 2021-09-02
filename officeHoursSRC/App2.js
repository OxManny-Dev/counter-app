import { useState } from 'react';
import { Button, ButtonGroup, Grid } from '@material-ui/core';
import ViewUno from './ViewOne';
import { ViewTwo } from './ViewTwo';
import Counter from './components/Counter';
const App2 = () => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ counter, setCounter ] = useState(0);
  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button
            onClick={() => setCurrentPage(1)}
          >
            One
          </Button>
          <Button
            onClick={() => setCurrentPage(2)}
          >
            Two
          </Button>
        </ButtonGroup>
      </Grid>
      <Grid item sm={12}>
        {
          currentPage === 1 ?
            <ViewUno
              counter={counter}
            />
            :
            <Counter
              counter={counter}
              setCounter={setCounter}
            />
        }
      </Grid>
    </Grid>
  );
}
export default App2;


