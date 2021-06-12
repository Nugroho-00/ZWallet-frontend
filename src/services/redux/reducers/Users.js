let initialState = {
  user: {},
};

let userReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_USER':
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default userReducers;
