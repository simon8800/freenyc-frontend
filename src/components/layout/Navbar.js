import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Grid } from "semantic-ui-react";

class Navbar extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Grid.Column style={{ margin: "10px 20px"}}>
        <Menu inverted color="blue" size="massive" widths="2">
          <Menu.Item
            as={Link}
            to="/home"
            name="home"
            active={activeItem === "home"}
            onclick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/about"
            name="about"
            active={activeItem === "about"}
            onclick={this.handleItemClick}
          />
        </Menu>
      </Grid.Column>
    );
  }
}

export default Navbar;
