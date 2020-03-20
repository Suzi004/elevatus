import React from "react";

import { Grid } from "semantic-ui-react";

export default function Welcome() {
  return (
    <Grid verticalAlign="middle" columns={4} centered>
      <Grid.Row>
        <Grid.Column>
          <h2>
            Welcome to the NOT FOUND page, if you are here it means you tried to
            reach a page that does not exist!
          </h2>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
