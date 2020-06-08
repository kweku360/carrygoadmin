import React from "react";
import { Router } from "@reach/router";
import Login from "./screens/auth/login";
import Dashboard from "./screens/admin/dashboard";
import AddAgent from "./screens/admin/agents/add";
import ListAgent from "./screens/admin/agents/list";
import ViewAgent from "./screens/admin/agents/view";

const Routes = () => {
  return (
    <Router>
      <Login path="/" />
      <Dashboard path="/dashboard" />
      <AddAgent path="/agent/add" />
      <ListAgent path="/agent/list" />
      <ViewAgent path="/agent/view/:id" />
    </Router>
  );
};

export default Routes;
