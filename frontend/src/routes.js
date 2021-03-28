import React from "react";
import Splash from "./components/splash/splash";
import UserFilesIndex from "./components/files/user_files_index";
import { Route, Switch } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/files" component={UserFilesIndex} />
      </Switch>
    </div>
  );
};

export default Routes;
