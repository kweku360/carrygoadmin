import React, { useState } from "react";
import { Router } from "@reach/router";
import Login from "./screens/auth/login";
import Dashboard from "./screens/admin/dashboard";
import AddAgent from "./screens/admin/agents/add";
import ListAgent from "./screens/admin/agents/list";
import ViewAgent from "./screens/admin/agents/view";
import ListRequests from "./screens/admin/requests/list";
import ViewRequests from "./screens/admin/requests/view";
import { AuthContext } from "../context/authcontext";
import AuthGuard from "../context/authguard";

const Routes = () => {
  //saving tokens
  const existingToken = localStorage.getItem("token");
  const [authToken, setAuthToken] = useState(existingToken);

  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
      <Router>
        <Login path="/" />
        <AuthGuard path="/dashboard" render={() => <Dashboard />} />
        <AuthGuard path="/agent/add" render={() => <AddAgent />} />
        <AuthGuard path="/agent/list" render={() => <ListAgent />} />
        <AuthGuard path="/agent/view/:id" render={() => <ViewAgent />} />
        <AuthGuard path="/request/list" render={() => <ListRequests />} />
        <AuthGuard path="/request/view/:id" render={() => <ViewRequests />} />
      </Router>
    </AuthContext.Provider>
  );
};

export default Routes;
