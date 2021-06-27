let initialState = {
  user: {},
  balance:0,
  notification:true
};

let userReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_USER':
      // console.log('balanced',payload.balances);
      return {
        ...state,
        user: payload,
        balance: payload.balances,
      };
    case 'ADD_BALANCE':
      return {
        ...state,
        balance: state.balance+Number(payload),
      };
    case 'SUB_BALANCE':
      console.log('called',state.balance, payload);
      return {
        ...state,
        balance: state.balance-Number(payload),
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
