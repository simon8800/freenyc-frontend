// React Stuff
import React from 'react';
import { BrowserRouter, Route, withRouter, Switch } from 'react-router-dom';

// Components Stuff
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Course from './Pages/Course'
import PageNotFound from './Pages/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/course/:id' render={props => <Course {...props} />} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
