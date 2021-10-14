import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    console.log(children);
    console.log(rest);
    const {user} = useAuth();

    return (
        <Route
        {...rest}
        render ={ ({location})=>user.email ? children:
        <Redirect to={{
            pathname:"/login",
            state:{from:location}
        }} ></Redirect>
        }>
            
        </Route>
    );
};

export default PrivateRoute;