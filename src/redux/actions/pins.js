const fetchPins = pins => {
  return {
    type: "FETCH_PINS_SUCCESS",
    pins
  };
};

export const getPins = () => {
  return dispatch => {
    const url =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3001"
        : "https://figpin-rails-api.herokuapp.com";
    return fetch(`${url}/pins`)
      .then(res => res.json())
      .then(pins => {
        dispatch(fetchPins(pins));
        dispatch({ type: "TOGGLE_LOADING" });
      });
  };
};

export const clearSearch = () => {
  return {
    type: "CLEAR_SEARCH"
  };
};

export const searchPins = keyword => {
  return {
    type: "SEARCH_PINS",
    keyword
  };
};

export const createPin = pinObject => {
  const pinToCreate = { pin: pinObject };
  return dispatch => {
    fetch(`https://figpin-rails-api.herokuapp.com/pins`, {
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
    fetch(`https://figpin-rails-api.herokuapp.com/pins/${id}`, {
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
    return fetch(`https://figpin-rails-api.herokuapp.com/pins/${id}`, {
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
