import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePin } from "../redux/actions/pins";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled.button`
  background-color: red;
  padding: 15px;
  border-radius: 5px;
  color: white;
`;

class PinShow extends Component {
  delete = () => {
    this.props.deletePin(this.props.pin.id, this.props.history);
  };
  render() {
    const { pin, loading } = this.props;
    console.log(pin, loading);
    if (loading && !pin) {
      return <p>Loading...</p>;
    }

    if (!loading && !pin) {
      return <p>Pin not found</p>;
    }
    return (
      <div>
        <h1>Pin Info</h1>
        <p>{pin.name}</p>
        <p>{pin.edition_size}</p>
        <StyledButton onClick={this.delete}>
          <strong>Delete</strong>
        </StyledButton>
        <Link to={`/pins/${pin.id}/edit`}>
          <strong>Edit</strong>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const pin = state.all.filter(pin => pin.id == id)[0];
  return {
    pin,
    loading: state.loading
  };
};

export default connect(
  mapStateToProps,
  { deletePin }
)(PinShow);
