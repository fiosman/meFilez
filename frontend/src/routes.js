import React from "react";
import Splash from "./components/splash/splash";
import FileList from "./components/files/file_list";
import { Route, Switch } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/files" component={FileList} />
      </Switch>
    </div>
  );
};

export default Routes;
