import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import LayoutMaster from "../../../components/layout/master";
import PricingTable from "../../../components/tables/pricingtable";
import { allPricing } from "../../../data/pricing";
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
    { id: 2, name: "Category" },
    { id: 3, name: "Rate / Km" },
    { id: 3, name: "Service Charge" },
    { id: 6, name: "" },
  ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await allPricing();
    console.log("pricing");
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
      <PricingTable cols={[cols]} data={data} />
    </Pane>
  );
};

const ListAgent = LayoutMaster(ListAgentPage, { title: "Pricing Model" });
export default ListAgent;
