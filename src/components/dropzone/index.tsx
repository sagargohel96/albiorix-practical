import React, { useCallback } from "react";
import s from "./dropzone.module.css";
import { TextInput } from "@mantine/core";
import { Error } from "../error";
import { imageToBase64Str } from "../../utils";

interface DropzoneProps {
  value: any;
  error: string | undefined;
  setFiledValue: (field: string, value: any) => void;
}

export const Dropzone: React.FC<DropzoneProps> = ({
  error,
  value,
  setFiledValue,
}) => {
  const handleImageChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      try {
        if (file) {
          const base64String = await imageToBase64Str(file);
          console.log(base64String, "base64");
          setFiledValue("image", base64String);
        }
      } catch (error) {
        console.error("error", error);
      }
    },
    [setFiledValue]
  );

  return (
    <div className={s.dropzoneWrapper}>
      <TextInput
        id="image"
        label="image"
        type="file"
        onChange={handleImageChange}
        className={s.inputWrapper}
      />
      {error && <Error name={error} />}
    </div>
  );
};
