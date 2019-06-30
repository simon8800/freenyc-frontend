// React Stuff
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/Landing";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import CourseState from "./context/courses/CourseState";

const App = () => {
  return (
    <CourseState>
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </CourseState>
  );
};

export default App;
