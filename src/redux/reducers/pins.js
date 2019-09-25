export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PINS_SUCCESS":
      return action.pins;
    case "PIN_CREATE_SUCCESS":
      return state.concat(action.payload);
    case "PIN_DELETE_SUCCESS":
      return state.filter(pin => pin.id !== action.payload);
    default:
      return state;
  }
};
