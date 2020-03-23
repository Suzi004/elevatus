import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { uploadCandidatesCV } from "../../api/api.js";

export default function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = e => {
        const uploadData = e.target.result;
        uploadCandidatesCV(uploadData);
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <Box
        textAlign="center"
        color="#9683aa"
        borderRadius="15px"
        p="9rem 0rem 9rem 0rem"
        minHeight="20rem"
        border="2px dashed #9683aa"
      >
        <Typography>Drop files fire or click to upload</Typography>
      </Box>
    </div>
  );
}
