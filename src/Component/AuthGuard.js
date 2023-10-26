import React from 'react';
import { Redirect } from 'react-router-dom';

const AuthGuard = (WrappedComponent) => {
  const isAuthenticated = /* Implement your authentication logic here */;

  return class extends React.Component {
    render() {
      if (isAuthenticated) {
        return <WrappedComponent {...this.props} />;
      } else {
        // Redirect to the login page if not authenticated
        return <Redirect to="/login" />;
      }
    }
  };
};

export default AuthGuard;