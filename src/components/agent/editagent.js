import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { updateProvider } from "../../data/provider";
import { Dialog, TextInputField, Text, toaster } from "evergreen-ui";

export const EditAgent = ({ isShown, setShowState, fieldData }) => {
  const [fValue, setvalue] = useState(fieldData.value || "");
  const [error, setError] = useState("");

  const update = async () => {
    const updated = await updateProvider(fieldData.uid, fieldData.name, fValue);

    if (updated === false) {
      toaster.danger("Unable to update now, pls try again later");
      return;
    } else {
      toaster.success("Update Successfull");
    }
  };

  const validate = () => {
    //lets validate required
    if (!fValue == "") {
      update();
    } else {
      setError("This Field is requred");
    }
  };

  return (
    <Dialog
      isShown={isShown}
      title={`Edit ${fieldData.label}`}
      onCloseComplete={() => setShowState()}
      onOpenComplete={() => {
        setvalue(fieldData.value);
      }}
      onConfirm={() => {
        validate();
      }}
      confirmLabel="Save"
      cancelLabel="close"
    >
      <TextInputField
        label={fieldData.label || ""}
        value={fValue}
        onChange={(e) => setvalue(e.target.value)}
        placeholder=""
        name={fieldData.name}
      />
      <Text size={400} color="danger">
        {error}
      </Text>
    </Dialog>
  );
};
