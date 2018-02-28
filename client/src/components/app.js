import React, { Component } from 'react';
import HeaderLanding from './header';
import HeaderIndex from './headers';
export default class App extends Component {
  render() {
    if(this.props.children.props.location.pathname==="/")
    {
      return(
        <div>
          <HeaderLanding />
          {this.props.children}
        </div>
      )
    } else {
      return(
        <div>
          <HeaderIndex />
          {this.props.children}
        </div>
      )
    }
  }
}
