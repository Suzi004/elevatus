import React, { Component } from "react";
import { Grid, Menu } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";

export default class MenuExampleHeaderVertical extends Component {
  state = { activeItem: "Welcome" };
  handleItemClick = (e, { name }) => {
    // this.setState({ activeItem: name });
    // console.log(name);
    this.props.history.push("/menu2/" + name);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <div className="header height-header">
          <h2> Test Aplication</h2>
        </div>
        <Grid>
          <Grid.Column width={4}>
            <Menu vertical>
              <div className="bcg height-menu">
                <Menu.Item>
                  <Menu.Header>Products</Menu.Header>

                  <Menu.Menu>
                    <Menu.Item
                      name="enterprise"
                      active={activeItem === "enterprise"}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name="consumer"
                      active={activeItem === "consumer"}
                      onClick={this.handleItemClick}
                    />
                  </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header>CMS Solutions</Menu.Header>

                  <Menu.Menu>
                    <Menu.Item
                      name="rails"
                      active={activeItem === "rails"}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name="python"
                      active={activeItem === "python"}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name="php"
                      active={activeItem === "php"}
                      onClick={this.handleItemClick}
                    />
                  </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header>Hosting</Menu.Header>

                  <Menu.Menu>
                    <Menu.Item
                      name="shared"
                      active={activeItem === "shared"}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name="dedicated"
                      active={activeItem === "dedicated"}
                      onClick={this.handleItemClick}
                    />
                  </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                  <Menu.Header>Support</Menu.Header>

                  <Menu.Menu>
                    <Menu.Item
                      name="email"
                      active={activeItem === "email"}
                      onClick={this.handleItemClick}
                    >
                      E-mail Support
                    </Menu.Item>
                    <Menu.Item
                      name="faq"
                      active={activeItem === "faq"}
                      onClick={this.handleItemClick}
                    >
                      FAQs
                    </Menu.Item>
                  </Menu.Menu>
                </Menu.Item>
              </div>
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={12}>
            <div className="mainContainer">
              <Switch>
                <Route
                  exact
                  path="/menu2/email"
                  render={() => (
                    <div> Izabran je email : {this.state.activeItem}</div>
                  )}
                />
                <Route exact path="/menu2/faq" render={() => <div>faq</div>} />
              </Switch>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
