let initialState = {
  count: 0,
  id: "",
  password: "",
};

function reducer(state = initialState, action) {
  console.log("action", action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 + action.payload.num };
    default:
      return { ...state };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
  }
}

export default reducer;
