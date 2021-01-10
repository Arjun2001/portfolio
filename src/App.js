import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/" render={() => (<Redirect to="/home" />)} /> */}
      </Switch>
    </Router>
  );
}

export default App;
