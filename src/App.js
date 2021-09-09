import { Switch, Route, } from 'react-router-dom';
import Counter from './components/Counter';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <Navbar>
      <Switch>
        <Route
          path='/todos'
          component={Todos}
        />
        <Route
          path='/'
          component={Counter}
        />
        <Route
          path='/counters'
          component={Counter}
        />
      </Switch>
    </Navbar>
  );
};
export default App;
