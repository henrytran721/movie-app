import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './features/movie/Main';
import Signup from './features/movie/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route
              exact
              path="/"
              render={() => (
                <div>
                  <Main />
                </div>
              )}
        />
            <Route
            exact
            path="/signup"
            render={() => (
            <div>
            <Signup />
            </div>
            )}
            />
          <Redirect to="/" />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
