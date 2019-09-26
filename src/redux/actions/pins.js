const fetchPins = pins => {
  return {
    type: "FETCH_PINS_SUCCESS",
    pins
  };
};

export const getPins = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/pins`)
      .then(res => res.json())
      .then(pins => dispatch(fetchPins(pins)));
  };
};

export const createPin = pinObject => {
  const pinToCreate = { pin: pinObject };
  return dispatch => {
    fetch(`http://localhost:3001/pins`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pinToCreate)
    })
      .then(res => res.json())
      .then(pin =>
        dispatch({
          type: "PIN_CREATE_SUCCESS",
          payload: pin
        })
      );
  };
};

export const deletePin = (id, history) => {
  return dispatch => {
    fetch(`http://localhost:3001/pins/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(id => {
        dispatch({ type: "DELETE_PIN_SUCCESS", payload: id });
        history.push("/pins");
      });
  };
};

export const updatePin = (pinObject, id, history) => {
  const pinToUpdate = { pin: pinObject };

  return dispatch => {
    return fetch(`http://localhost:3001/pins/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pinToUpdate)
    })
      .then(res => res.json())
      .then(updatedPin => {
        dispatch({ type: "UPDATE_PIN_SUCCESS", payload: updatedPin });
        history.push(`/pins/${updatedPin.id}`);
      });
  };
};
