import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Login } from "./screens/login";
import { Churras } from "./screens/churras";
import { ChurrasForm } from "./screens/churras-form";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            <Redirect to="/login" />
          }}
        />
        <Route path="/login" component={Login} />
        <Route path="/churras" component={Churras} />
        <Route path="/churras-form" component={ChurrasForm} />
      </Switch>
    </Router>
  );
}

export default App;
