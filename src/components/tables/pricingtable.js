import React, { useState } from "react";
import { filter } from "fuzzaldrin-plus";
import { Table, IconButton } from "evergreen-ui";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { navigate } from "@reach/router";

const PricingTable = ({ data, cols }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (data) => {
    const sQuery = searchQuery.trim();

    // If the searchQuery is empty, return the data as is.
    if (sQuery.length === 0) return data;

    return data.filter((data) => {
      // Use the filter from fuzzaldrin-plus to filter by name.
      const result = filter([data.location], searchQuery);
      return result.length === 1;
    });
  };

  const tableData = filterData(data);

  return (
    <Table>
      <Table.Head>
        <Table.SearchHeaderCell
          css={css`
            width: 30px;
          `}
          onChange={(e) => setSearchQuery(e)}
          value={searchQuery}
        />
        {cols[0].map((colItem, index) => {
          return (
            <Table.TextHeaderCell key={index}>
              {colItem.name}
            </Table.TextHeaderCell>
          );
        })}
      </Table.Head>
      <Table.VirtualBody height={550}>
        {tableData.map((dataitem) => (
          <Table.Row
            key={dataitem.id}

          // isSelectable="false"
          // onSelect={() => alert("name")}
          >
            <Table.TextCell textProps={{ align: "center" }}>
              {dataitem.id}
            </Table.TextCell>
            <Table.TextCell
              css={css`
                text-align: center;
              `}
              textProps={{ textAlign: "center" }}
            >
              {dataitem.provider.contactperson}
            </Table.TextCell>
            <Table.TextCell>{dataitem.provider.primarycontact}</Table.TextCell>
            <Table.TextCell>{dataitem.client.name}</Table.TextCell>
            <Table.TextCell>{dataitem.client.contact}</Table.TextCell>
            <Table.TextCell>{dataitem.totalprice}</Table.TextCell>
            <Table.TextCell>{dataitem.status}</Table.TextCell>
            <Table.TextCell>
              <IconButton
                float="right"
                marginBottom={8}
                marginTop={8}
                marginRight={8}
                appearance="minimal"
                icon="more"
                // is="a"
                onClick={async () => {
                  await navigate(`/request/view/${dataitem.uid}`);
                }}
              />
            </Table.TextCell>
          </Table.Row>
        ))}
      </Table.VirtualBody>
    </Table>
  );
};

export default PricingTable;
