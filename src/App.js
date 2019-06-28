// React Stuff
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';

class App extends React.Component {
  

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/home' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
