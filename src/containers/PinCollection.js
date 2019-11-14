import React, { Component } from "react";
import { connect } from "react-redux";

class PinCollection extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>My Collection</h1>
        {this.props.pins.map(pin => (
          <p>{pin.name}</p>
        ))}
      </div>
    );
  }
}

export default connect(state => ({ pins: state.user.pinCollection }))(
  PinCollection
);
