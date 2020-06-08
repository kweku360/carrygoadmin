import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Pane, Heading, Text, NotificationsIcon, Avatar } from "evergreen-ui";

const Topbar = () => {
  return (
    <Pane
      display="flex"
      padding={5}
      borderBottom={"2px solid #f4f4f7"}
      margin={"30px"}
      borderRadius={3}
    >
      <Pane flex={1} alignItems="center" display="flex"></Pane>
      <Pane>
        <NotificationsIcon color="default" size={23} marginRight={16} />
        <Avatar isSolid name="Carrygo Admin" size={30} />
        <Text
          position={"relative"}
          top="-7px"
          fontSize="20px"
          left={"20px"}
          size={500}
        >
          Carry Go Admin
        </Text>
      </Pane>
    </Pane>
  );
};

export default Topbar;
