import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { Paper, Button, Grid, Typography, Divider } from "@material-ui/core";

import HowToReg from "@material-ui/icons/HowToReg";

export default class CandidateCardView extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    cardTextHeader: PropTypes.string.isRequired,
    cardTextBody: PropTypes.string.isRequired
  };

  static defaultProps = {
    id: null,
    cardTextHeader: null,
    cardTextBody: null
  };

  handleItemClick = () => console.log("should navigate to see chosen CV");

  render() {
    const { cardTextHeader, cardTextBody } = this.props;

    return (
      <Paper elevation={3}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          style={{ margin: "0.8em 0em 0.5em" }}
        >
          <Grid
            item
            lg={8}
            xs={5}
            sm={7}
            style={{ padding: "0.8em 0em 0.8em" }}
          >
            <Typography variant="h5" gutterBottom>
              {cardTextHeader}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {cardTextBody}
            </Typography>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid
            item
            lg={2}
            xs={4}
            sm={2}
            style={{ padding: "0.8em 0em 0.8em" }}
          >
            <div style={{ textAlign: "center" }}>
              <HowToReg fontSize="large" />
              <br />
              <Button
                type="submit"
                size="medium"
                variant="contained"
                style={{ backgroundColor: "mediumpurple", color: "white" }}
                onClick={this.handleItemClick}
              >
                View CV
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
