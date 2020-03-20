import React, { Component } from "react";
import { CircularProgress } from "@material-ui/core";

import { Button, Grid, IconButton } from "@material-ui/core";

import ViewAgendaOutlined from "@material-ui/icons/ViewAgendaOutlined";
import ViewColumnSharp from "@material-ui/icons/ViewColumnSharp";

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
      <Grid container justify="space-around">
        <Grid item container sm={9} lg={9} xs={6} direction="column">
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
                <ViewColumnSharp style={{ color: "#2aaee4", fontSize: 40 }} />
              </IconButton>
            </Grid>
          </Grid>

          <Grid item>
            {er ? (
              <CircularProgress color="primary" />
            ) : (
              <ErrorBoundary>{listOfOptions}</ErrorBoundary>
            )}
          </Grid>
        </Grid>

        <Grid item sm={2} lg={2} xs={5}>
          <br />
          <Button
            aria-label="ViewAgendaOutlined"
            onClick={this.clearSearches}
            style={{
              backgroundColor: "crimson",
              color: "white",
              width: "100%"
            }}
          >
            Clear Filters
          </Button>
          <br />
          <br />
          <CustomizedInputSearch
            searchType="Search by Name"
            handleSearch={this.handleSearchByName}
            fieldValue={nameValue}
          />
          <br />
          <CustomizedInputSearch
            searchType="Search by Job Title"
            handleSearch={this.handleSearchByJobTitle}
            fieldValue={jobTitleValue}
          />
          <br />
          <Button
            aria-label="UploadCV"
            onClick={this.uploadCV}
            style={{
              backgroundColor: "blueviolet",
              color: "white",
              width: "100%"
            }}
          >
            Upload CV
          </Button>
        </Grid>
      </Grid>
    );
  }
}
