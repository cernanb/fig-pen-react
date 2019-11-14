export default (state = { user: {}, pinCollection: [] }, action) => {
  switch (action.type) {
    case "ADD_PIN_TO_COLLECTION":
      return {
        ...state,
        pinCollection: state.pinCollection.concat(action.pin)
      };
    default: {
      return state;
    }
  }
};
