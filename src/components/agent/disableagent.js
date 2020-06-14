import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {
  Pane,
  Text,
  Button,
  Menu,
  Dialog,
  Paragraph,
  toaster,
} from "evergreen-ui";
import { updateProvider } from "../../data/provider";

const DisableAgent = ({ isShown, setShowState, fieldData }) => {
  const update = async (close) => {
    const updated = await updateProvider(fieldData.uid, "status", "disabled");

    if (updated === false) {
      toaster.danger("Unable to update now, pls try again later");
      return;
    } else {
      toaster.success("Agent Disabled");
      close;
    }
  };
  return (
    <Dialog
      isShown={isShown}
      title="Disable Agent"
      onCloseComplete={() => setShowState()}
      hasFooter={false}
    >
      {({ close }) => (
        <Pane>
          <Paragraph>
            A disabled agent no longer shows on the app. Do you want to diaable
            agent ?
          </Paragraph>
          <Button
            marginTop={16}
            onClick={() => {
              update(close);
            }}
          >
            DISABLE AGENT
          </Button>
        </Pane>
      )}
    </Dialog>
  );
};

export default DisableAgent;
