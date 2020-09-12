import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { Home, Contact } from './pages';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path='/home' component={Home} exact />
            <Route path='/contact' component={Contact} exact />
            <Route>
                <Redirect to='/home' />
            </Route>
        </Switch>
    );
};
