import React, { Component } from 'react';

class Cat extends Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/images/cat.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y, width: 40, height: 40 }} />
    );
  }
}

export default Cat;