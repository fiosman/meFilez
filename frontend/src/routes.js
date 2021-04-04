import React from "react";
import Splash from "./components/splash/splash";
import FileList from "./components/files/file_list";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute, AuthRoute } from "./util/route_utils";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute exact path="/files" component={FileList} />
      </Switch>
    </div>
  );
};

export default Routes;
