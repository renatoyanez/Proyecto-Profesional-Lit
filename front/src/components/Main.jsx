import React from "react";
import { Route, Switch } from "react-router-dom";
import SidebarContainer from "../containers/SidebarContainer";
import PropertiesContainer from "../containers/PropertiesContainer";
import SinglePropertyContainer from "../containers/SinglePropertyContainer";
import RegisterContainer from "../containers/RegisterContainer";
import LoginContainer from "../containers/LoginContainer";
import CreatePropertyContainer from "../containers/CreatePropertyContainer";
import FavouritesContainer from "../containers/FavouritesContainer";

export default () => {
  return (
    <div>
      <SidebarContainer />
      <Switch>
        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/create" component={CreatePropertyContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/propiedad/:id" component={SinglePropertyContainer} />
        <Route exact path="/search/:nombre" component={PropertiesContainer} />
        <Route exact path="/favorites" component={FavouritesContainer} />
        <Route exact path="/" component={PropertiesContainer} />
      </Switch>
    </div>
  );
};
