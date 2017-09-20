import React, { Component } from 'react';

class Icon extends Component {
  render() {
    let className='icon-' + this.props.name,
        size = this.props.size,
        color = this.props.color;
    return <span className={className} style={{fontSize: size, color: color}} />;
  }
}

export default Icon;
