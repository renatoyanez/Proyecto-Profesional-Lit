import React from "react";
import SidebarContainer from "../containers/SidebarContainer";
import PropertiesContainer from "../containers/PropertiesContainer";
import SinglePropertyContainer from "../containers/SinglePropertyContainer";
import { Route, Switch } from "react-router-dom";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
import NavbarContainer from "../containers/NavbarContainer";


export default () => {
  return (
    <div>
      <NavbarContainer />
      <Route path="/register" component={RegisterContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/propiedad/:id" component={SinglePropertyContainer} />
      <Route component={SidebarContainer} />
      <Switch>
        <Route exact path="/" component={PropertiesContainer} />
        <Route exact path="/search/:nombre" component={PropertiesContainer} />
      </Switch>
    </div>
  );
};
