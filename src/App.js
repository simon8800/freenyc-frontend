// React Stuff
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Redux Stuff
import { connect } from "react-redux";
import { reauthenticate } from './redux/actions/userActions'

// Components Stuff
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Course from "./Pages/Course";
import Category from "./Pages/Category";
import PageNotFound from "./Pages/PageNotFound";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('token')){
      this.props.reauthenticate(localStorage.getItem('token'))
    }
  }

  render() {
    return (
      <BrowserRouter>
          <div>
            <Navbar />
          </div>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/class/:id" render={props => <Course {...props} />} />
              <Route
                path="/category/:id"
                render={props => <Category {...props} />}
              />
              <Route component={PageNotFound} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { reauthenticate })(App);