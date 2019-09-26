export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PINS_SUCCESS":
      return action.pins;
    case "PIN_CREATE_SUCCESS":
      return state.concat(action.payload);
    case "DELETE_PIN_SUCCESS":
      return state.filter(pin => pin.id !== action.payload);
    case "UPDATE_PIN_SUCCESS":
      return state.map(pin => {
        if (pin.id === action.payload.id) {
          return action.payload;
        } else {
          return pin;
        }
      });
    default:
      return state;
  }
};
