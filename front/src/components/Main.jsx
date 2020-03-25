import React from 'react';
import SidebarContainer from '../containers/SidebarContainer';
import PropertiesContainer from '../containers/PropertiesContainer'
import { Route, Switch } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Route exact path="/" component={SidebarContainer} />
            <Switch>
                <Route exact path="/propiedades" component={PropertiesContainer} />
            </Switch>
        </div>
    )
}