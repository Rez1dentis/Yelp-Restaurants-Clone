import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ authState, children }) {
  return (
    <div>
      {authState ? children : <Navigate to="/" />}
    </div>
  );
}

export default PrivateRoute;
