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

const VerifyAgent = ({ isShown, setShowState, fieldData }) => {
  const update = async (close) => {
    const updated = await updateProvider(fieldData.uid, "status", "verified");

    if (updated === false) {
      toaster.danger("Unable to update now, pls try again later");
      return;
    } else {
      toaster.success("Agent Verification Successfull");
      close;
    }
  };
  return (
    <Dialog
      isShown={isShown}
      title="Verify"
      onCloseComplete={() => setShowState()}
      hasFooter={false}
    >
      {({ close }) => (
        <Pane>
          <Paragraph>
            A verified agent appears on the app. Do you want to verify agent ?
          </Paragraph>
          <Button
            marginTop={16}
            onClick={() => {
              update(close);
            }}
          >
            VERIFY AGENT
          </Button>
        </Pane>
      )}
    </Dialog>
  );
};

export default VerifyAgent;
