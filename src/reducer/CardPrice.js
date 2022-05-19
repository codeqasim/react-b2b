const initialState = 25;

const cardprice = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENTESS":
      return state + 25;
    case "DECREMENTESS":
      return Math.max(state - 25, 0);
    default:
      return state;
  }
};
export default cardprice;
