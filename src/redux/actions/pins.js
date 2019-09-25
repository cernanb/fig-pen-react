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
