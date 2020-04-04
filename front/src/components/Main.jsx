import React from 'react';
import SidebarContainer from '../containers/SidebarContainer';
import PropertiesContainer from '../containers/PropertiesContainer'
import SinglePropertyContainer from '../containers/SinglePropertyContainer'
import { Route, Switch } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Route component={SidebarContainer} />
            <Switch>
                <Route exact path="/" component={PropertiesContainer} />
                <Route exact path="/propiedad/:id" component={SinglePropertyContainer} />
                <Route exact path="/search" component={SidebarContainer} /> 
            </Switch>
        </div>
    )
}