import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { Home } from './pages';

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path='/home' component={Home} exact />
            <Route>
                <Redirect to='/home' />
            </Route>
        </Switch>
    );
};
