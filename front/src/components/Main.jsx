import React from "react";
import SidebarContainer from "../containers/SidebarContainer";
import PropertiesContainer from "../containers/PropertiesContainer";
import SinglePropertyContainer from "../containers/SinglePropertyContainer";
import { Route, Switch } from "react-router-dom";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";


export default () => {
  return (
    <div>
      <Route path="/register" component={RegisterContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/propiedad/:id" component={SinglePropertyContainer} />
      <Route component={SidebarContainer} />
      <Switch>
        <Route exact path="/" component={PropertiesContainer} />
        <Route exact path="/search" component={SidebarContainer} />
      </Switch>
    </div>
  );
};
