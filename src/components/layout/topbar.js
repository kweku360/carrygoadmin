import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Pane, Heading, Avatar, Button } from "evergreen-ui";
import { useAuth } from "../../../context/authcontext";

const Topbar = ({ title }) => {
  const { setAuthToken } = useAuth();
  const logout = async () => {
    setAuthToken();
  };
  return (
    <Pane
      display="flex"
      padding={5}
      borderBottom={"2px solid #f4f4f7"}
      margin={"30px"}
      borderRadius={3}
    >
      <Pane flex={1} alignItems="left" display="flex">
        <Heading size={700}>{title || ""}</Heading>
      </Pane>
      <Pane>
        {/* <NotificationsIcon color="" size={28} marginRight={16} /> */}
        <Avatar isSolid name="Carrygo Admin" size={30} />
        <Button marginTop={-20} appearance="minimal" marginLeft={15}>
          Carrygo Admin
        </Button>
        <Button
          iconBefore="log-out"
          marginTop={-20}
          marginLeft={15}
          onClick={() => logout()}
        >
          log out
        </Button>
      </Pane>
    </Pane>
  );
};

export default Topbar;
