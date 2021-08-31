import { useState } from 'react';
import { Button, ButtonGroup, Grid } from '@material-ui/core';
import ViewUno from './ViewOne';
import { ViewTwo } from './ViewTwo';
const App2 = () => {
  const [ currentPage, setCurrentPage ] = useState(1);
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
            <ViewUno/>
            :
            <ViewTwo
              className='col-md-4'
              id='ViewTwo'
              string='Hello World'
              isHungry={false}
              myObj={{
                primaryWeapon: 'Trombone',
                secondaryWeapon: 'Sponge',
              }}
              myFn={() => alert('This is my function')}
              items={[
                'Sleeping',
                'Eating',
                'Skating',
              ]}
            />
        }
      </Grid>
    </Grid>
  );
}
export default App2;


