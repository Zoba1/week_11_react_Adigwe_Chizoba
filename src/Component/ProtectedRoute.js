import React from 'react';
import { Route } from 'react-router-dom';
import AuthGuard from './AuthGuard';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <AuthGuard component={Component} {...props} />} />
);

export default ProtectedRoute;