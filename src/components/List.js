import {
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
export const name = 'Manny'
export const ListRenderer = ({ items, ...props }) => {
  console.log('From line 8 of list renderer',props);
  // props.callMe();
  return (
    <Grid container>
      <List>
        {
          items.map(item => {
            return (
              <ListItem key={item.id}>
                <ListItemText>{item.todo}</ListItemText>
              </ListItem>
            );
          })
        }
      </List>
    </Grid>
  )
};
export default ListRenderer;
