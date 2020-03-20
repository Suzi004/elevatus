import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

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
      <div
        style={{
          border: "1px dashed",
          margin: "5rem",
          padding: "10rem",
          minHeight: "20rem"
        }}
      >
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
}
