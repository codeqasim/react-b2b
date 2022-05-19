const initialState = 0;

 const countNumber = (state = initialState, action) => {
switch (action.type) {
    case 'INCREMENTS': return state + 1;
    case 'DECREMENTS': return Math.max(state - 1, 0) ;
    default: return state;
}
}
export default countNumber;