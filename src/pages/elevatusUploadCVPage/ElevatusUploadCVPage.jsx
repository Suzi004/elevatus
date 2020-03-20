import React, { Component } from "react";
// import PropTypes from "prop-types";

import { Button, Grid } from "@material-ui/core";
import { uploadCandidatesCV } from "../../api/api.js";
import MyDropzone from "./MyDropzone.jsx";

export default class ElevatusUploadCVPage extends Component {
  handleUpload = e => {
    let files = e.target.files;

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      const uploadData = e.target.result;

      console.log(uploadData);
      uploadCandidatesCV(uploadData);
    };
  };

  viewAllCV = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <MyDropzone />
        <Grid container justify="space-around" alignItems="center">
          <Grid item>
            <input
              accept="*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={this.handleUpload}
              style={{ display: "none" }}
            />
            <label htmlFor="contained-button-file">
              <Button
                aria-label="UploadCV"
                variant="contained"
                color="primary"
                component="span"
              >
                Upload
              </Button>
            </label>
          </Grid>
          <Grid item>
            <Button
              aria-label="ViewAllCVs"
              variant="contained"
              color="primary"
              onClick={this.viewAllCV}
            >
              View all CV
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
