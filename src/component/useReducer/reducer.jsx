export const initial_value = 0;

export const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return (state = state + action.payload);
    case "DEC":
      if (state == 0) return (state = 0);
      return (state = state - action.payload);
    default:
      state;
  }
};
