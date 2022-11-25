let defaultState = {
    data: [],
  };

  const addDataReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_DATA": {
        return {
          ...state,
          data: [...state.chatDetail, action.payload],
        };
      }

    default:
      return state;
  }
};

      export default addDataReducer;
