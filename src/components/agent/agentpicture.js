import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { updateProvider } from "../../data/provider";
import {
  Dialog,
  TextInputField,
  Text,
  toaster,
  FilePicker,
  Pane,
} from "evergreen-ui";

export const AgentPicture = ({ isShown, setShowState, fieldData }) => {
  const [fValue, setvalue] = useState(fieldData.value || "");
  const [imgSrc, setImgSrc] = useState(fieldData.value);
  const [error, setError] = useState("");

  const update = async () => {
    const updated = await updateProvider(fieldData.uid, fieldData.name, imgSrc);

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

  const readImage = (img) => {
    var reader = new FileReader();
    reader.onload = function (e) {
      setImgSrc(e.target.result);
    };
    reader.readAsDataURL(img);
  };

  return (
    <Dialog
      isShown={isShown}
      title={`Select Agent Image`}
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
      <FilePicker
        width={250}
        marginBottom={32}
        onChange={(files) => readImage(files[0])}
        placeholder="choose image"
      />
      <Pane>
        <img src={imgSrc} width="100" height="100" alt="" />
      </Pane>
    </Dialog>
  );
};
