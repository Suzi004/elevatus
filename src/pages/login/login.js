import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import "./login.scss";

export default class ActivationPage extends Component {
  render() {
    return (
      <div className="login">
        <Grid verticalAlign="middle" columns={3} centered>
          <Grid.Row>
            <Grid.Column>
              <div className="login-form">
                <h2>LOGIN</h2>
                <input /> <br /> <br />
                <button> submit </button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
