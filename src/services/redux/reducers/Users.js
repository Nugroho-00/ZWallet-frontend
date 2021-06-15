let initialState = {
  user: {},
  balance:0,
  notification:true
};

let userReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_USER':
      return {
        ...state,
        user: payload,
      };
    case 'ADD_BALANCE':
      return {
        ...state,
        balance: state.balance+Number(payload),
      };
    case 'SUB_BALANCE':
      return {
        ...state,
        balance: state.balance-payload,
      };
    case 'SET_NOTIF':
      return {
        ...state,
        notification:payload,
      };

    default:
      return state;
  }
};

export default userReducers;
