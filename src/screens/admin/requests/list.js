import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import LayoutMaster from "../../../components/layout/master";
import RequestsTable from "../../../components/tables/requeststable";
import { allRequests } from "../../../data/requests";
import { Pane, Spinner, Text } from "evergreen-ui";

const centerForm = css`
  margin-left: 30px;
  width: 96%;
  padding: 10px;
`;

const AllRequestsPage = () => {
  const [data, setData] = useState([]);
  const cols = [
    // { id: 1, name: "id" },
    { id: 2, name: "Agent Name" },
    { id: 3, name: "Agent Number" },
    { id: 4, name: "Client Name" },
    { id: 5, name: "Client Number" },
    { id: 6, name: "Amount" },
    { id: 7, name: "Status" },
    { id: 8, name: "" },
  ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await allRequests("all");
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
      {data.length == 0 ? (
        <Pane>
          <Spinner marginX="auto" marginY={120} />
          <Text size={500}>loading</Text>
        </Pane>
      ) : (
        <RequestsTable cols={[cols]} data={data} />
      )}
    </Pane>
  );
};

const AllRequests = LayoutMaster(AllRequestsPage, { title: "All Requests" });
export default AllRequests;
