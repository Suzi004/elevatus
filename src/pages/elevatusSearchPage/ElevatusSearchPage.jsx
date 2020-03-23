import React, { Component } from "react";

import ViewAgendaOutlined from "@material-ui/icons/ViewAgendaOutlined";
import ViewColumnSharp from "@material-ui/icons/ViewColumnSharp";
import { Grid, IconButton, CircularProgress, Box } from "@material-ui/core";

import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import AddIcon from "@material-ui/icons/Add";
import SortIcon from "@material-ui/icons/Sort";
import QueueIcon from "@material-ui/icons/Queue";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

import CandidateCardView from "./CandidateCardView";
import CustomizedInputSearch from "./CandidateSearch";

import { getAllCandidates } from "../../api/api.js";
import ErrorBoundary from "../../utils/ErrorBoundries.jsx";

export default class ElevatusSearch extends Component {
  state = {
    nameValue: "",
    jobTitleValue: "",
    arrayOfOptions: []
  };

  componentDidMount() {
    getAllCandidates().then(data => {
      this.setState({ arrayOfOptions: data });
    });
  }

  handleSearchByName = value => {
    this.setState({ nameValue: value });
  };

  handleSearchByJobTitle = value => {
    this.setState({ jobTitleValue: value });
  };

  clearSearches = () => {
    this.setState({ nameValue: "", jobTitleValue: "" });
  };

  uploadCV = () => {
    this.props.history.push("/upload");
  };

  render() {
    const { nameValue, jobTitleValue, arrayOfOptions } = this.state;

    let filtered, er;
    arrayOfOptions ? (filtered = arrayOfOptions) : (filtered = []);
    arrayOfOptions ? (er = false) : (er = true);

    // combined search criteria from both search fileds - includes* (or startsWith)
    if (nameValue !== "") {
      filtered = filtered.filter(word =>
        word.name.toUpperCase().includes(nameValue.toUpperCase())
      );
    }
    // for mutually exclusive : "filtered = this.arrayOfOptions.filter..."" for both filters
    if (jobTitleValue !== "") {
      filtered = filtered.filter(word =>
        word.jobTitle.toUpperCase().includes(jobTitleValue.toUpperCase())
      );
    }

    const listOfOptions = filtered.map(option => (
      <CandidateCardView
        key={option.id}
        id={option.id}
        cardTextHeader={option.name}
        cardTextBody={option.jobTitle}
      />
    ));

    return (
      <Box height="100%" style={{ backgroundColor: "#F0F0F0" }}>
        <Grid
          container
          justify="space-between"
          direction="row-reverse"
          style={{ height: "100%" }}
        >
          <Grid item sm={3} lg={3} xs={12}>
            <Box
              p={{
                xs: 0,
                sm: "1rem 0rem 1rem 2rem",
                md: "1rem 0rem 1rem 2rem"
              }}
              height="100%"
            >
              <Box
                width="100%"
                p="1rem"
                color="white"
                borderRadius="5px 0px 0px"
                style={{
                  backgroundColor: "#ec546d"
                }}
              >
                <Grid container justify="space-between">
                  <Grid item>Filters</Grid>
                  <Grid item>
                    <IconButton
                      size="small"
                      aria-label="ClearFilters"
                      color="white"
                      onClick={this.clearSearches}
                      style={{ fontSize: 12, color: "white" }}
                    >
                      <DeleteOutlined
                        style={{ fontSize: 11, color: "white" }}
                      />
                      Clean
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>

              <Box
                p="1rem 2rem 0rem 2rem"
                height="100%"
                style={{ backgroundColor: "white" }}
              >
                <Box>
                  <IconButton
                    size="small"
                    aria-label="Upload CV"
                    color="black"
                    onClick={this.uploadCV}
                  >
                    <AddIcon
                      style={{
                        fontSize: "2.5rem",
                        color: "#ec546d",
                        padding: "0rem 1rem 0rem 0rem"
                      }}
                    />
                    Upload CV
                  </IconButton>
                </Box>
                <Box>
                  <IconButton size="small" aria-label="Upload CV" color="black">
                    <SortIcon
                      style={{
                        fontSize: "2.5rem",
                        color: "#ec546d",
                        padding: "0rem 1rem 0rem 0rem"
                      }}
                    />
                    Sort by
                  </IconButton>
                </Box>
                <Box>
                  <IconButton size="small" aria-label="Upload CV" color="black">
                    <QueueIcon
                      style={{
                        fontSize: "2.5rem",
                        color: "#ec546d",
                        padding: "0rem 1rem 0rem 0rem"
                      }}
                    />
                    Match CV
                  </IconButton>
                </Box>
                <Box>
                  <IconButton size="small" aria-label="Upload CV" color="black">
                    <WorkOutlineIcon
                      style={{
                        fontSize: "2.5rem",
                        color: "#ec546d",
                        padding: "0rem 1rem 0rem 0rem"
                      }}
                    />
                    Experience
                  </IconButton>
                </Box>
                <Box p="1rem 0rem 0rem 0rem">
                  <CustomizedInputSearch
                    searchType="Search by Name"
                    handleSearch={this.handleSearchByName}
                    fieldValue={nameValue}
                  />
                </Box>
                <Box p="2rem 0rem 0rem 0rem">
                  <CustomizedInputSearch
                    searchType="Search by Job Title"
                    handleSearch={this.handleSearchByJobTitle}
                    fieldValue={jobTitleValue}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item container sm={9} lg={9} xs={12} direction="column">
            <Box display={{ xs: "none", sm: "block" }}>
              <Grid item container justify="flex-end">
                <Grid item>
                  <IconButton
                    variant="outlined"
                    aria-label="ViewAgendaOutlined"
                    component="span"
                  >
                    <ViewAgendaOutlined
                      style={{ color: "#2aaee4", fontSize: 36 }}
                    />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    variant="outlined"
                    aria-label="ViewAgendaOutlined"
                    component="span"
                  >
                    <ViewColumnSharp
                      style={{ color: "#2aaee4", fontSize: 40 }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
            <Grid item>
              <Box pt={{ xs: 8, sm: 0, md: 0 }}>
                {er ? (
                  <CircularProgress color="primary" />
                ) : (
                  <ErrorBoundary>{listOfOptions}</ErrorBoundary>
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}
