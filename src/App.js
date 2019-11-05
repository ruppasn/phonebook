import React from "react";
import { Route, Switch } from "react-router-dom";
import userPage from "./user/userPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/users' component={userPage} />
      </Switch>
    </div>
  );
}

export default App;
