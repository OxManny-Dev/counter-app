import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Grid,
  IconButton,
  Paper,
  InputBase,
  Divider,
  makeStyles, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction,
} from '@material-ui/core';
import PlaylistAddTwoToneIcon from '@material-ui/icons/PlaylistAddTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
export const Todos = (props) => {
  const classes = useStyles();
  const [ todos, setTodos ] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        console.log(res);
        setTodos(res.data);
      })
  }, []);
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>Todos component</h1>
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Add a todo"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton color="primary" className={classes.iconButton} aria-label="directions">
            <PlaylistAddTwoToneIcon />
          </IconButton>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        {
          todos.length === 0 ?
            <h1>No todos yet</h1>
            :
          todos.map((todo, index) => {
            return (
              <ListItem>
                <ListItemText
                  primary={todo.title}
                  secondary='Todo'
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })
        }
      </Grid>
    </Grid>
  );
};
export default Todos;
