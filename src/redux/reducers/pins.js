export default (state = { loading: true, all: [] }, action) => {
  switch (action.type) {
    case "FETCH_PINS_SUCCESS":
      return { ...state, all: action.pins };
    case "TOGGLE_LOADING":
      return { ...state, loading: !state.loading };
    case "PIN_CREATE_SUCCESS":
      return { ...state, pins: state.all.concat(action.payload) };
    case "DELETE_PIN_SUCCESS":
      return {
        ...state,
        pins: state.all.filter(pin => pin.id !== action.payload)
      };
    case "UPDATE_PIN_SUCCESS":
      return {
        ...state,
        all: state.map(pin => {
          if (pin.id === action.payload.id) {
            return action.payload;
          } else {
            return pin;
          }
        })
      };
    default:
      return state;
  }
};
