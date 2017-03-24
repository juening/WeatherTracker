import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {

  render() {
    return (
      <div className="row" style={appStyle} >
        <Header />
        {this.props.children}
      </div>
    );
  }
}

const imageUrl = './img/Night.png';
const appStyle = {
    backgroundImage: `url(${imageUrl})`,
    color:"#ffffff"
};

