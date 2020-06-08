import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import LayoutMaster from "../../../components/layout/master";
import Evergreentable from "../../../components/tables/evergreentable";
import { allProviders } from "../../../data/provider";
import { Pane } from "evergreen-ui";

const centerForm = css`
  margin-left: 30px;
  width: 96%;
  padding: 10px;
`;

const ListAgentPage = () => {
  const [data, setData] = useState([]);
  const cols = [
    // { id: 1, name: "id" },
    { id: 2, name: "Agent Name" },
    { id: 3, name: "Phone" },
    { id: 3, name: "Service" },
    { id: 4, name: "Vehicle Type" },
    { id: 5, name: "Vehicle Number" },
    { id: 6, name: "" },
  ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await allProviders();
    setData(res);
  };
  return (
    <Pane
      css={centerForm}
      elevation={1}
      float="left"
      margin={24}
      display="flex"
      flexDirection="column"
    >
      <Evergreentable cols={[cols]} data={data} />
    </Pane>
  );
};

const ListAgent = LayoutMaster(ListAgentPage);
export default ListAgent;
