const initialState = 12;

const changeNumber = (state = initialState, action) => {
switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return Math.max(state - 1,0) ;
    default: return state;
}
}
export default changeNumber;