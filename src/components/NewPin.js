import React, { Component } from "react";
import { connect } from "react-redux";
import { createPin } from "../redux/actions/pins";

class NewPin extends Component {
  state = {
    name: "",
    edition_size: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();

    this.props.createPin(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>Name:</label>
          <input
            onChange={this.handleChange}
            required
            type="text"
            name="name"
            value={this.state.name}
          />
          <label>Edition Size:</label>
          <input
            onChange={this.handleChange}
            type="text"
            required
            name="edition_size"
            value={this.state.edition_size}
          />
          <button type="submit">Create Pin</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {
    createPin
  }
)(NewPin);
