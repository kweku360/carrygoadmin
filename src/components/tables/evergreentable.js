import React, { useState } from "react";
import { filter } from "fuzzaldrin-plus";
import { Table, IconButton, Button } from "evergreen-ui";
import { navigate } from "@reach/router";

const Evergreentable = ({ data, cols }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filterData = (data) => {
    const sQuery = searchQuery.trim();

    // If the searchQuery is empty, return the data as is.
    if (sQuery.length === 0) return data;

    return data.filter((data) => {
      // Use the filter from fuzzaldrin-plus to filter by name.
      const result = filter(
        [
          data.contactperson,
          data.primarycontact,
          data.service,
          data.vehiclenumber,
        ],
        searchQuery
      );
      return result.length === 1;
    });
  };

  const tableData = filterData(data);

  return (
    <Table>
      <Table.Head>
        <Table.SearchHeaderCell
          onChange={(e) => setSearchQuery(e)}
          value={searchQuery}
          placeholder="filter by agent name"
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
            <Table.TextCell>{dataitem.id}</Table.TextCell>
            <Table.TextCell>{dataitem.contactperson}</Table.TextCell>
            <Table.TextCell>{dataitem.primarycontact}</Table.TextCell>
            <Table.TextCell>{dataitem.service}</Table.TextCell>
            <Table.TextCell>{dataitem.vehiclebrand}</Table.TextCell>
            <Table.TextCell>{dataitem.vehiclenumber}</Table.TextCell>
            <Table.TextCell>
              <Button
                float="right"
                marginBottom={8}
                marginTop={8}
                marginRight={8}
                appearance="minimal"
                onClick={async () => {
                  await navigate(`/agent/view/${dataitem.uid}`);
                }}
              >
                view
              </Button>
            </Table.TextCell>
          </Table.Row>
        ))}
      </Table.VirtualBody>
    </Table>
  );
};

export default Evergreentable;
