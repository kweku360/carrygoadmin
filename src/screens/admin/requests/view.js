import React, { useEffect, useState } from "react";
import LayoutMaster from "../../../components/layout/master";
import { Pane, Menu, Heading, Text } from "evergreen-ui";
import { css } from "@emotion/core";
import { getRequest } from "../../../data/requests";

const centerForm = css`
  margin-left: 30px;
  width: 96%;
  padding: 10px;
`;
const smallText = css`
  font-size: 19px;
  font-weight: bold;
  margin: 20px;
`;

const ViewRequestPage = () => {
  const [data, setData] = useState({});
  const [dataProvider, setProviderData] = useState({});
  const [agentUid, setAgentuid] = useState(
    window.location.pathname.split("/").pop()
  );
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await getRequest(agentUid);
    setData(res);
    console.log(data);
    setProviderData(data.provider);
    console.log(dataProvider);
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
      {console.log(data)}
      <Pane clearfix>
        <Pane
          width="20%"
          height={180}
          elevation={1}
          margin={14}
          display="flex"
          float="left"
        >
          <Menu
            css={css`
              width: 300px;
            `}
          >
            <Menu.OptionsGroup
              title="actions"
              options={[
                { label: "End Request", value: "asc" },
                { label: "Update Status", value: "desc" },
                // { label: "Disable Agent", value: "desc1" },
              ]}
              // selected={}
              // onChange={}
            />
            <Menu.Divider />
          </Menu>
        </Pane>
        <Pane width="68%" margin={14} float="left">
          <Pane clearfix>
            <Pane width="33%" float="left">
              <Pane>
                <Heading size={600}> Request Information </Heading>
              </Pane>

              <Pane margin={10}>
                <Text size={500}>Date</Text>
                <Heading css={smallText}>{data.created_at}</Heading>
              </Pane>
              <Pane margin={10}>
                <Text size={500}>Pick Up Location</Text>
                <Heading size={500} css={smallText}>
                  {data.pickuplocation}
                </Heading>
              </Pane>
              <Pane margin={10}>
                <Text size={500}>Delivery Location</Text>
                <Heading size={500} css={smallText}>
                  {data.deliverylocation}
                </Heading>
              </Pane>
              <Pane margin={10}>
                <Text size={500}>Total Price</Text>
                <Heading css={smallText}>{data.totalprice}</Heading>
              </Pane>
              <Pane margin={10}>
                <Text size={500}>Transaction Id</Text>
                <Heading css={smallText}></Heading>
              </Pane>
              <Pane margin={10}>
                <Text size={500}>Payment Invoice Number</Text>
                <Heading size={500} css={smallText}></Heading>
              </Pane>
            </Pane>
            <Pane width="33%" float="left">
              <Pane>
                <Heading size={600}> Agent Information </Heading>
              </Pane>

              <Pane margin={10}>
                <Text size={500}>Name</Text>
                <Heading css={smallText}>
                  {data.provider?.contactperson || ""}
                </Heading>
              </Pane>
              <Pane margin={10}>
                <Text size={500}>Phone</Text>
                <Heading size={500}>
                  {data.provider?.primarycontact || ""}
                </Heading>
              </Pane>
              <Pane margin={10}>
                <Text size={500}>Vehicle Type</Text>
                <Heading size={500}>
                  {data.provider?.vehiclebrand || ""}
                </Heading>
              </Pane>
              <Pane margin={10}>
                <Text size={500}>Vehicle Number</Text>
                <Heading>{data.provider?.vehiclenumber || ""}</Heading>
              </Pane>
            </Pane>
            <Pane width="33%" float="left">
              <Pane>
                <Heading size={600}> Client Information </Heading>
              </Pane>

              <Pane margin={10}>
                <Text size={500}>Name</Text>
                <Heading css={smallText}>{data.client?.name || ""}</Heading>
              </Pane>
              <Pane margin={10}>
                <Text size={500}>Phone</Text>
                <Heading size={500}>{data.client?.contact || ""}</Heading>
              </Pane>
              <Pane margin={10}>
                <Text size={500}>Email</Text>
                <Heading size={500}>{data.client?.email || ""}</Heading>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
};

const ViewRequest = LayoutMaster(ViewRequestPage);
export default ViewRequest;
