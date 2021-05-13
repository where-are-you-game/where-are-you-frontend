import React from "react";

import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, hasPlayData, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        hasPlayData
          ? <Component {...props} />
          : <Redirect to="/" />}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  hasPlayData: PropTypes.bool.isRequired
};

export default PrivateRoute;
