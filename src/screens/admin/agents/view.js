import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import LayoutMaster from "../../../components/layout/master";
import { getProvider } from "../../../data/provider";
import { EditAgent } from "../../../components/agent/editagent";
import { AgentPicture } from "../../../components/agent/agentpicture";
import { Pane, Text, Button, Menu } from "evergreen-ui";

const centerForm = css`
  margin-left: 30px;
  width: 96%;
  padding: 10px;
`;
const largeText = css`
  font-size: 30px;
  font-weight: bold;
  margin: 20px;
`;
const mediumText = css`
  font-size: 23px;
  font-weight: bold;
  margin: 20px;
`;
const smallText = css`
  font-size: 16px;
  font-weight: normal;
  margin: 20px;
`;

const ViewAgentPage = () => {
  const [data, setData] = useState([]);
  const [isShowEdit, setShowEdit] = useState(false);
  const [isAgentPictureModal, setAgentPictureModal] = useState(false);
  const [fieldData, setFieldData] = useState({});
  const [agentUid, setAgentuid] = useState(
    window.location.pathname.split("/").pop()
  );

  const setShow = () => {
    setShowEdit(false);
  };
  const setShowAgentPicture = () => {
    setAgentPictureModal(false);
  };
  const setField = (name, label, value, uid) => {
    let fdata = { name, label, value, uid };
    setFieldData(fdata);
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await getProvider(agentUid);
    setData(res);
  };

  const readImage = (img) => {
    var reader = new FileReader();
    reader.onload = function (e) {
      console.log(e.target.result);
    };
    reader.readAsDataURL(img);
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
      <Pane clearfix>
        <Pane
          width="20%"
          height={180}
          elevation={1}
          margin={14}
          display="flex"
          float="left"
        >
          <AgentPicture
            fieldData={fieldData}
            isShown={isAgentPictureModal}
            setShowState={setShowAgentPicture}
          />
          {/* {readImage(data.profileimg)} */}
          {
            //
            data.profileimg ? (
              <img alt="" src={data.profileimg} />
            ) : (
              <Button
                marginBottom={16}
                iconBefore="user"
                onClick={() => {
                  setField(
                    "profileimg",
                    "Full name",
                    data.profileimg,
                    agentUid
                  );
                  return setAgentPictureModal(true);
                }}
              >
                Add Agent Image
              </Button>
            )
          }
        </Pane>
        <EditAgent
          fieldData={fieldData}
          isShown={isShowEdit}
          setShowState={setShow}
        />
        <Pane width="68%" margin={14} borderBottom height={180} float="left">
          <Pane>
            <span css={largeText}>{data.contactperson}</span>
            <Button
              marginBottom={16}
              appearance="minimal"
              iconBefore="edit"
              onClick={() => {
                setField(
                  "contactperson",
                  "Full name",
                  data.contactperson,
                  agentUid
                );
                return setShowEdit(true);
              }}
            />
          </Pane>
          <Pane>
            <span css={mediumText}>Agent</span>
            {/* <Button
              marginBottom={16}
              appearance="minimal"
              iconBefore="edit"
              onClick={() => {
                return setShowEdit(true);
              }}
            /> */}
          </Pane>
          <Pane>
            <span css={mediumText}>{data.primarycontact}</span>
            <Button
              marginBottom={6}
              appearance="minimal"
              iconBefore="edit"
              onClick={() => {
                setField(
                  "primarycontact",
                  "Contact",
                  data.primarycontact,
                  agentUid
                );
                return setShowEdit(true);
              }}
            />
          </Pane>
        </Pane>
      </Pane>

      <Pane clearfix>
        <Pane width="20%" height={180} margin={14} display="flex" float="left">
          <Menu
            css={css`
              width: 300px;
            `}
          >
            <Menu.OptionsGroup
              title="actions"
              options={[
                { label: "Set Up Agent Account", value: "asc" },
                { label: "Verify Agent", value: "desc" },
                { label: "Disable Agent", value: "desc1" },
              ]}
              // selected={}
              // onChange={}
            />
            <Menu.Divider />
          </Menu>
        </Pane>
        <Pane width="68%" margin={14} float="left">
          <Pane>
            <Text size={500}>email : </Text>
            <span css={smallText}>{data.email}</span>
            <Button
              marginBottom={16}
              appearance="minimal"
              iconBefore="edit"
              onClick={() => {
                setField("email", "Email", data.email, agentUid);
                return setShowEdit(true);
              }}
            />
          </Pane>
          <Pane>
            <Text size={500}>location : </Text>
            <span css={smallText}>{data.location}</span>
            <Button
              marginBottom={16}
              appearance="minimal"
              iconBefore="edit"
              onClick={() => {
                setField("location", "Location", data.location, agentUid);
                return setShowEdit(true);
              }}
            />
          </Pane>
          <Pane>
            <Text size={500}>Drivers Id : </Text>
            <span css={smallText}>{data.driverid}</span>
            <Button
              marginBottom={16}
              appearance="minimal"
              iconBefore="edit"
              onClick={() => {
                setField("driversid", "Drivers Id", data.driversid, agentUid);
                return setShowEdit(true);
              }}
            />
          </Pane>
          <Pane>
            <Text size={500}>Vehicle Brand : </Text>
            <span css={smallText}>{data.vehiclebrand}</span>
            <Button
              marginBottom={16}
              appearance="minimal"
              iconBefore="edit"
              onClick={() => {
                setField(
                  "vehiclebrand",
                  "Vehicle brand",
                  data.vehiclebrand,
                  agentUid
                );
                return setShowEdit(true);
              }}
            />
          </Pane>
          <Pane>
            <Text size={500}>Vehicle Number : </Text>
            <span css={smallText}>{data.vehiclenumber}</span>
            <Button
              marginBottom={16}
              appearance="minimal"
              iconBefore="edit"
              onClick={() => {
                setField(
                  "vehiclenumber",
                  "Vehicle Number",
                  data.vehiclenumber,
                  agentUid
                );
                return setShowEdit(true);
              }}
            />
          </Pane>
          <Pane>
            <Text size={500}>National ID : </Text>
            <span css={smallText}>{data.nationalid}</span>
            <Button
              marginBottom={16}
              appearance="minimal"
              iconBefore="edit"
              onClick={() => {
                setField(
                  "nationalid",
                  "National Id",
                  data.nationalid,
                  agentUid
                );
                return setShowEdit(true);
              }}
            />
          </Pane>
          <Pane>
            <Text size={500}>Notes : </Text>
            <span css={smallText}>{data.description}</span>
            <Button
              marginBottom={16}
              appearance="minimal"
              iconBefore="edit"
              onClick={() => {
                setField("description", "Notes", data.description, agentUid);
                return setShowEdit(true);
              }}
            />
          </Pane>
          <Pane>
            <Text size={500}>Agent Union : </Text>
            <span css={smallText}>{data.providerunion}</span>
            <Button
              marginBottom={16}
              appearance="minimal"
              iconBefore="edit"
              onClick={() => {
                setField(
                  "providerunion",
                  "Agent Union",
                  data.providerunion,
                  agentUid
                );
                return setShowEdit(true);
              }}
            />
          </Pane>
          <Pane>
            <Text size={500}>Carry go partner : </Text>
            <span css={smallText}>{data.carrygopartner}</span>
            <Button
              marginBottom={16}
              appearance="minimal"
              iconBefore="edit"
              onClick={() => {
                setField(
                  "carrygopartner",
                  "Carry Go Partner",
                  data.carrygopartner,
                  agentUid
                );
                return setShowEdit(true);
              }}
            />
          </Pane>
          <Pane>
            <Text size={500}>Registration Date : </Text>
            <span css={smallText}>{data.created_at}</span>
          </Pane>
        </Pane>
      </Pane>
    </Pane>
  );
};

const ViewAgent = LayoutMaster(ViewAgentPage);
export default ViewAgent;
