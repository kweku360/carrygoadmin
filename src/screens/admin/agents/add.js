import React, { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useForm, ErrorMessage } from "react-hook-form";
import LayoutMaster from "../../../components/layout/master";
import { saveProvider } from "../../../data/provider";
import {
  TextInputField,
  Text,
  Pane,
  Button,
  Textarea,
  Label,
  toaster,
  Spinner,
  Combobox,
} from "evergreen-ui";

const centerForm = css`
  margin-left: 80px;
  width: 90%;
  padding: 10px;
`;
const AddAgentPage = () => {
  const { register, errors, handleSubmit } = useForm({
    validateCriteriaMode: "all",
  });
  const [loader, setLoader] = useState(false);
  const [service, setService] = useState("");
  const onSubmit = (data) => {
    if (service == "") {
      toaster.danger("please choose an agent category");
    } else {
      data["service"] = service;
      //console.log(data);
      // perform Save operation
      setLoader(true);
      saveAgent(data);
    }
  };

  const saveAgent = async (data) => {
    const result = await saveProvider(data);
    setLoader(false);
    if (result.status == "true") {
      toaster.success("Agent Saved Successfully");
      return;
    } else {
      toaster.danger("Unable to Save Agent ." + result.message);
    }
  };

  const isValid = (val) => {
    if (typeof val === "undefined") {
      return false;
    } else {
      return true;
    }
  };

  const showError = (fieldName) => {
    return (
      <ErrorMessage errors={errors} name={fieldName}>
        {({ messages }) => {
          return (
            messages &&
            Object.entries(messages).map(([type, message]) => (
              <Text color="danger" key={type}>
                {message}
              </Text>
            ))
          );
        }}
      </ErrorMessage>
    );
  };
  return (
    <Pane
      css={centerForm}
      elevation={1}
      float="left"
      margin={26}
      display="flex"
      flexDirection="column"
    >
      {loader ? (
        <Pane>
          <Spinner marginX="auto" marginY={120} />
          <Text size={500}>Saving Data ...</Text>
        </Pane>
      ) : (
        <Pane width="50%">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Text fontWeight="bold">Agent Category</Text>
            <Combobox
              items={[
                "Ranger",
                "Rentals",
                "Truck",
                "Biker",
                "Towing",
                "Moving",
                "Hearse",
                "Waste Management",
              ]}
              onChange={(selected) => setService(selected)}
              placeholder="Agent category"
              autocompleteProps={{
                // Used for the title in the autocomplete.
                title: "Select One",
              }}
            />
            <br />

            {showError("fullname")}
            <TextInputField
              label="Full Name"
              isInvalid={isValid(errors.fullname)}
              // description="This is a description."
              placeholder="agent fullname"
              name="fullname"
              innerRef={register({
                required: "Agent Fullname is required",
              })}
            />
            {showError("contact")}
            <TextInputField
              name="contact"
              label="Contact"
              isInvalid={isValid(errors.contact)}
              placeholder="eg. 02078894634"
              innerRef={register({
                required: "Agent Contact is required",
                maxLength: {
                  value: 10,
                  message: "Please Enter a valid phone number eg. 0208997865",
                },
                minLength: {
                  value: 10,
                  message: "Please Enter a valid phone number eg. 0208997865",
                },
                pattern: {
                  value: /\d/g.length === 10,
                  message: "Please Enter a valid phone number eg. 0208997865",
                },
              })}
            />
            {showError("email")}
            <TextInputField
              name="email"
              label="Email Address"
              isInvalid={isValid(errors.email)}
              placeholder="eg.  me@gmail.com"
              innerRef={register({
                required: "Agent Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please Enter a valid email eg. me@gmail.com",
                },
              })}
            />
            <Pane clearfix>
              <Pane width="45%" marginRight={27} float="left">
                {showError("nationalid")}
                <TextInputField
                  name="nationalid"
                  isInvalid={isValid(errors.nationalid)}
                  label="National Id"
                  placeholder=""
                  innerRef={register}
                />
              </Pane>
              <Pane width="50%" float="left">
                {showError("driverid")}
                <TextInputField
                  name="driverid"
                  isInvalid={isValid(errors.driverid)}
                  label="Drivers Id"
                  placeholder=""
                  innerRef={register({
                    required: "Drivers Id is required",
                  })}
                />
              </Pane>
            </Pane>
            <Pane clearfix>
              <Pane width="45%" marginRight={27} float="left">
                {showError("vehiclebrand")}
                <TextInputField
                  name="vehiclebrand"
                  isInvalid={isValid(errors.vehiclebrand)}
                  label="Vehicle Brand"
                  placeholder=""
                  innerRef={register({
                    required: "Vehicle Brand is required",
                  })}
                />
              </Pane>
              <Pane width="50%" float="left">
                {showError("vehiclenumber")}
                <TextInputField
                  name="vehiclenumber"
                  isInvalid={isValid(errors.vehiclenumber)}
                  label="Vehicle Number"
                  placeholder=""
                  innerRef={register({
                    required: "Vehicle Number is required",
                  })}
                />
              </Pane>
            </Pane>
            {showError("location")}
            <TextInputField
              name="location"
              label="Agent Location"
              isInvalid={isValid(errors.location)}
              placeholder=""
              innerRef={register({
                required: "Agent Location is required",
              })}
            />
            <Pane clearfix>
              <Pane width="45%" marginRight={27} float="left">
                {showError("agentunion")}
                <TextInputField
                  name="agentunion"
                  isInvalid={isValid(errors.agentunion)}
                  label="Agent Union"
                  placeholder="eg. GPRTU"
                  innerRef={register}
                />
              </Pane>
              <Pane width="50%" float="left">
                {showError("carrygopartner")}
                <TextInputField
                  name="carrygopartner"
                  label="Carrygo Partner"
                  placeholder=""
                  innerRef={register}
                />
              </Pane>
            </Pane>
            <Label htmlFor="textarea-2" marginBottom={4} display="block">
              Notes
            </Label>
            <Textarea
              name="notes"
              innerRef={register}
              id="textarea-2"
              placeholder="Add Agent Description"
            />
            <Pane marginTop="30">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                }}
                marginRight={100}
                height={40}
                iconBefore="arrow-left"
              >
                Cancel
              </Button>
              <Button
                float="right"
                height={40}
                appearance="primary"
                iconAfter="arrow-right"
              >
                Save
              </Button>
            </Pane>
          </form>
        </Pane>
      )}
    </Pane>
  );
};

const AddAgent = LayoutMaster(AddAgentPage, { title: "Add Agent" });
export default AddAgent;
