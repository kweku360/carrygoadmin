import React, { Fragment } from "react";
import { useAuth } from "./authcontext";
import { Redirect } from "@reach/router";

const AuthGuard = (props) => {
  const { authToken } = useAuth();
  console.log(authToken);

  return (
    <Fragment>
      {authToken === undefined ? (
        <Redirect noThrow={true} to="/" />
      ) : (
        <div>{props.render()}</div>
      )}
    </Fragment>
  );
};

export default AuthGuard;
