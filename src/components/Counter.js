import { Grid } from '@material-ui/core';
export const Counter = (props) => {
  console.log(props);
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>Counter component</h1>
      </Grid>
    </Grid>
  );
};
export default Counter;
