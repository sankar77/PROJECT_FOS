import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const PrivateRoute = ({component: Component, ...rest}) => {
    const { user } = useAuth();

    return (
        <Route
            {...rest}
            render = {props => {
                return user
                    ? <Component {...props} />
                    : <Redirect to='/'></Redirect>
            }}
        >
        </Route>
    );
};

export default PrivateRoute;