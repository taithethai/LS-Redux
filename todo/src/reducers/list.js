const base = [
    {
      value: "Add store to index.js",
      key: 0,
      completed: true
    },
    {
      value: "create reducers",
      key: 1,
      completed: false
    },
    {
      value: "use mapStateToProps to display default reducer data",
      key: 2,
      completed: false
    },
    {
      value: "THEN work on action creator portion of the flow",
      key: 3,
      completed: false
    }];
export default (state = base, action) => {
  switch(action.type) {
    case "TICK_COMPLETED":
      return state.slice().splice(action.payload.key, 1, action.payload); //action.payload is the iterated array
    case "NEW_ITEM":
      // const newState = state.slice();
      return state.concat(action.payload);
    default:
      return state;
  }
};
