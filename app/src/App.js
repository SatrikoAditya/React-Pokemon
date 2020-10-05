import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {Home, Add, Detail, Grass, Fire, Water} from './pages/'
import {Provider} from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <nav className="container mt-3">
            <Link to="/">Home</Link>
            <Link className="ml-3" to="/add">Add</Link>
            <Link className="ml-3" to="/grass">Grass</Link>
            <Link className="ml-3" to="/fire">Fire</Link>
            <Link className="ml-3" to="/water">Water</Link>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/pokemon/:id">
            <Detail />
          </Route>
          <Route path="/grass"> 
            <Grass />
          </Route>
          <Route path="/water">
            <Water />
          </Route>
          <Route path="/fire">
            <Fire />
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
