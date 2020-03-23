import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PostAdd from "@material-ui/icons/PostAdd";

import MyDropzone from "./MyDropzone.jsx";
import { uploadCandidatesCV } from "../../api/api.js";

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
      <Grid container>
        <Grid item sm={1} lg={1} xs={1} />
        <Grid item sm={10} lg={10} xs={10}>
          <Typography component="div">
            <Box m="2rem 0rem 1rem 0rem">
              <h3> UPLOAD RESUMES </h3>{" "}
            </Box>
            <Box textAlign="left" m="1rem 0rem 1rem 0rem">
              Note: You can upload maximum 50 resumes.
            </Box>
            <Box textAlign="left" m="1rem 0rem 1rem 0rem">
              Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium
              purus sit amet fermentum. Donec sed odio operae, eu vulputate
              felis rhoncus. Ambitioni dedisse scripsisse iudicaretur. Ambitioni
              dedisse scripsisse iudicaretur. Ambitioni dedisse scripsisse
              iudicaretur.
            </Box>
          </Typography>
          <MyDropzone />
          <Box m="3rem 0rem 0rem 0rem">
            <Grid container justify="space-between" alignItems="center">
              <Grid item>
                <PostAdd color="secondary" fontSize="large" />
                <Typography display="inline" variant="h5" component="h5">
                  24 RESUMES UPLOADED
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  aria-label="ViewAllCVs"
                  variant="contained"
                  size="large"
                  style={{ backgroundColor: "mediumpurple", color: "white" }}
                  onClick={this.viewAllCV}
                >
                  View all CV
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item sm={1} lg={1} xs={1} />
      </Grid>
    );
  }
}
