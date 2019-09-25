import React, { Component } from "react";
import { connect } from "react-redux";

class PinsList extends Component {
  render() {
    if (this.props.pins.length === 0) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h1>Pins List</h1>
        {this.props.pins.map(pin => (
          <p>{pin.name}</p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pins: state
  };
};

export default connect(mapStateToProps)(PinsList);
