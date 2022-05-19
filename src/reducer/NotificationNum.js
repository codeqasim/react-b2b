const initialState = 0;

 const NotificationNum = (state = initialState, action) => {
switch (action.type) {
    case 'INCREMENTES': return state + 1;
    case 'DECREMENTES': return Math.max(state - 1, 0) ;
    default: return state;
}
}
export default NotificationNum;