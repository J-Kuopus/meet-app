import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.top = null;
}

  getStyle = () => {
    return {
      color: this.color,
      top: this.top,
    };
  }

  render() {
    return (
      <div>
        <p className= "Alert"style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
    this.top = '130px'
  }
}

class ErrorAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = 'red';
      this.top = '345px'
    }
  }

export { InfoAlert, ErrorAlert }; 