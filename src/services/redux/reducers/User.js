const initialState = {
  user: {},
};

const userReducers = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_USER':
      return {
        ...state,
        user: payload,
      };
  }
};

export default userReducers;
