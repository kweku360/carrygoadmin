import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import LayoutMaster from "../../components/layout/master";
// import logo from "../../assets/img/cgo.png";

const DashboardPage = () => {
  return (
    <h1>Welcome to CarryGo Admin</h1>
    // <img
    //   alt=""
    //   css={css`
    //     margin-left: 30%;
    //   `}
    //   src={logo}
    // />
  );
};

const Dashboard = LayoutMaster(DashboardPage, { title: "Dashboard" });
export default Dashboard;
