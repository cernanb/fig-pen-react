import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PinsList extends Component {
  render() {
    if (this.props.pins.length === 0) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <h1>Pins List</h1>
        {this.props.pins.map(pin => (
          <p key={pin.id}>
            <Link to={`/pins/${pin.id}`}>{pin.name}</Link>
          </p>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pins: state.all
  };
};

export default connect(mapStateToProps)(PinsList);
