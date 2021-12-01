/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Route } from "react-router-dom";
import Common from "../components/layout/Common";

const PrivateRoute = ({ component: Component, ...props }) => {

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

export default PrivateRoute;
