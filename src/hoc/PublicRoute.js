/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Route } from "react-router-dom";
import Common from "components/layout/Common";
import PropTypes from 'prop-types'

const PublicRoute = ({ component: Component, ...props }) => {

  return (
    <Route
      {...props}
      render={(props) =>
        <Common>
          <Component {...props} />
        </Common>
      }
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.elementType,
  exact: PropTypes.bool,
  path: PropTypes.string,
}
export default PublicRoute;
