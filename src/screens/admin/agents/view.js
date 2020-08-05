import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import LayoutMaster from "../../../components/layout/master";
import { getProvider } from "../../../data/provider";
import { EditAgent } from "../../../components/agent/editagent";
import { AgentPicture } from "../../../components/agent/agentpicture";
import VerifyAgent from "../../../components/agent/verifyagent";
import { Pane, Text, Button, Menu, Badge } from "evergreen-ui";
import DisableAgent from "../../../components/agent/disableagent";
import { serverUrl } from "./../../../utils/server";

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
  const [isUpdateComplete, setUpdateComplete] = useState(false);

  const [isAgentPictureModal, setAgentPictureModal] = useState(false);
  const [isVerifyAgentModal, setVerifyAgentModal] = useState(false);
  const [isDisableAgentModal, setDisableAgentModal] = useState(false);
  const [fieldData, setFieldData] = useState({});
  const [agentUid, setAgentuid] = useState(
    window.location.pathname.split("/").pop()
  );

  const setShow = () => {
    setUpdateComplete(!isUpdateComplete);
    setShowEdit(false);
  };
  const setShowAgentPicture = () => {
    setUpdateComplete(!isUpdateComplete);
    setAgentPictureModal(false);
  };
  const setShowVerifyAgent = () => {
    setUpdateComplete(!isUpdateComplete);
    setVerifyAgentModal(false);
  };
  const setShowDisableAgent = () => {
    setUpdateComplete(!isUpdateComplete);
    setDisableAgentModal(false);
  };
  const setField = (name, label, value, uid) => {
    let fdata = { name, label, value, uid };
    setFieldData(fdata);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [isUpdateComplete]);

  const loadData = async () => {
    const res = await getProvider(agentUid);
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
      <Pane clearfix>
        <Pane width="20%" height={180} margin={14} float="left">
          <AgentPicture
            fieldData={fieldData}
            isShown={isAgentPictureModal}
            setShowState={setShowAgentPicture}
          />
          {/* {readImage(data.profileimg)} */}
          {data.profileimg ? (
            <div>
              <img
                width="220px"
                height="180px"
                alt=""
                src={`${serverUrl()}/agentimages/${data.profileimg}.png`}
              />
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
                Edit Agent Image
              </Button>
            </div>
          ) : (
            <Button
              marginBottom={16}
              iconBefore="user"
              onClick={() => {
                setField("profileimg", "Full name", data.profileimg, agentUid);
                return setAgentPictureModal(true);
              }}
            >
              Add Agent Image
            </Button>
          )}
        </Pane>
        <EditAgent
          fieldData={fieldData}
          isShown={isShowEdit}
          setShowState={setShow}
        />
        <Pane width="68%" margin={14} borderBottom height={180} float="left">
          <Pane>
            <span css={largeText}>{data.contactperson}</span>
            {data.status == "unverified" ? (
              <Badge color="yellow">{`${data.status}`}</Badge>
            ) : null}
            {data.status == "verified" ? (
              <Badge color="green">{`${data.status}`}</Badge>
            ) : null}
            {data.status == "disabled" ? (
              <Badge color="red">{`${data.status}`}</Badge>
            ) : null}

            <Button
              marginBottom={16}
              appearance="minimal"
              onClick={() => {
                setField(
                  "contactperson",
                  "Full name",
                  data.contactperson,
                  agentUid
                );
                return setShowEdit(true);
              }}
            >
              edit
            </Button>
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
            >
              edit
            </Button>
          </Pane>
        </Pane>
      </Pane>

      <Pane clearfix>
        <Pane width="20%" height={180} margin={30} display="flex" float="left">
          <VerifyAgent
            fieldData={fieldData}
            isShown={isVerifyAgentModal}
            setShowState={setShowVerifyAgent}
          />
          <DisableAgent
            fieldData={fieldData}
            isShown={isDisableAgentModal}
            setShowState={setShowDisableAgent}
          />
          <Menu>
            <Menu.Group>
              <Menu.Item
                icon="people"
                onSelect={() => {
                  setField("verifyagent", "verifyagent", "", agentUid);
                  return setVerifyAgentModal(true);
                }}
              >
                Set Up Agent Account
              </Menu.Item>
              <Menu.Item
                icon="lock"
                onSelect={() => {
                  setField("verifyagent", "verifyagent", "", agentUid);
                  return setVerifyAgentModal(true);
                }}
              >
                Verify Agent
              </Menu.Item>
              <Menu.Item
                icon="remove"
                onSelect={() => {
                  setField("disableagent", "disableagent", "", agentUid);
                  return setDisableAgentModal(true);
                }}
              >
                Disable Agent
              </Menu.Item>
            </Menu.Group>
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
                setField("email", "email", data.email, agentUid);
                return setShowEdit(true);
              }}
            >
              edit
            </Button>
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
            >
              edit
            </Button>
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
            >
              edit
            </Button>
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
            >
              edit
            </Button>
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
            >
              edit
            </Button>
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
            >
              edit
            </Button>
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
            >
              edit
            </Button>
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
            >
              edit
            </Button>
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
            >
              edit
            </Button>
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

const ViewAgent = LayoutMaster(ViewAgentPage, { title: "Agent" });
export default ViewAgent;
