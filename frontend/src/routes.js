import React from "react";
import Splash from "./components/splash/splash";
import RootFiles from "./components/files/root_files";
import { Switch } from "react-router-dom";
import { ProtectedRoute, AuthRoute } from "./util/route_utils";

export const Routes = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute
          exact
          path={["/files", "/files/:fileId"]}
          component={RootFiles}
        />
      </Switch>
    </div>
  );
};

export default Routes;
