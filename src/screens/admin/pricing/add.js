import React, { useState } from "react";
import LayoutMaster from "../../../components/layout/master";
import { savePricing } from "../../../data/pricing";
import {
  TextInputField,
  Text,
  Pane,
  Button,
  toaster,
  Spinner,
  Combobox,
} from "evergreen-ui";

import { useForm, ErrorMessage } from "react-hook-form";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const centerForm = css`
  margin-left: 80px;
  width: 40%;
  padding: 10px;
`;

const AddPricingPage = () => {
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
      savePricingModel(data);
    }
  };

  const savePricingModel = async (data) => {
    const result = await savePricing(data);
    setLoader(false);
    if (result.status == "true") {
      toaster.success("Pricing Model Saved Successfully");
      return;
    } else {
      toaster.danger("Unable to Save pricing ." + result.message);
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
            <Text fontWeight="bold">Select Category</Text>
            <Combobox
              items={[
                "Ranger",
                "Rental",
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

            {showError("rateperkm")}
            <TextInputField
              label="Rate per Kilometer (GHc)"
              isInvalid={isValid(errors.rateperkm)}
              // description="This is a description."
              placeholder="Rate per Kilometer"
              name="rateperkm"
              innerRef={register({
                required: "Rate per Kilometer is required",
              })}
            />
            {showError("fixedprice")}
            <TextInputField
              label="Fixed Service Charge (GHc)"
              isInvalid={isValid(errors.fixedprice)}
              placeholder="Fixed Service Charge"
              name="fixedprice"
              innerRef={register({
                required: "Fixed Service Charge is required",
              })}
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
const AddPricing = LayoutMaster(AddPricingPage, { title: "Add Pricing " });
export default AddPricing;
