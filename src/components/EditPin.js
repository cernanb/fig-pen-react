import React, { Component } from "react";
import { connect } from "react-redux";
import { updatePin } from "../redux/actions/pins";

class EditPin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.pin.name,
      edition_size: props.pin.edition_size
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.pin.name !== this.props.pin.name) {
      this.setState({
        name: this.props.pin.name,
        edition_size: this.props.pin.edition_size
      });
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  update = e => {
    e.preventDefault();
    this.props.updatePin(this.state, this.props.pin.id, this.props);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.update}>
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
          <button type="submit">Update Pin</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const pin = state.filter(pin => pin.id == id)[0] || {};
  return {
    pin
  };
};
export default connect(
  mapStateToProps,
  {
    updatePin
  }
)(EditPin);
