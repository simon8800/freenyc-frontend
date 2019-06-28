import React, { Component } from 'react'
import { Menu, Input, Grid } from 'semantic-ui-react';


class Navbar extends Component {

  state = { activeItem: 'home' }
  
  handleItemClick = (e, { name }) => this.setState({activeItem: name})

  render() {
    const { activeItem } = this.state;

    return (
      <Grid.Column>
        <Menu secondary color='blue' size='massive' widths='2'>
          <Menu.Item name='home' active={activeItem === 'home'} onclick={this.handleItemClick}/>
          <Menu.Item name='about'/>
        </Menu>
      </Grid.Column>
    )
  }
}

export default Navbar

