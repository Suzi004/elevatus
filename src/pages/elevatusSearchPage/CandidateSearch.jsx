import React, { Component } from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

export default class CustomizedInputSearch extends Component {
  state = {
    searchInput: this.props.fieldValue
  };

  static propTypes = {
    handleSearch: PropTypes.func.isRequired,
    searchType: PropTypes.string.isRequired,
    fieldValue: PropTypes.string.isRequired
  };

  static defaultProps = {
    handleSearch: null,
    searchType: null,
    fieldValue: null
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
    let value = event.target.value;
    this.props.handleSearch(value);
  };

  handleClickSearch = event => {
    event.preventDefault();
    let value = this.state.searchInput;
    this.props.handleSearch(value);
  };
  render() {
    const { searchType, fieldValue } = this.props;

    return (
      <Paper component="form" style={{ padding: "2px 4px", display: "flex" }}>
        <InputBase
          name="searchInput"
          className="candidateSearch-input"
          placeholder={searchType}
          inputProps={{ "aria-label": { searchType } }}
          onChange={this.handleInputChange}
          value={fieldValue}
        />
        <IconButton
          type="submit"
          className="candidateSearch-iconButton"
          aria-label="search"
          onClick={this.handleClickSearch}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}
