const initialState = {
  user: {},
  msg: '',
};

const getUserById = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_BY_ID_PENDING': {
      return {
        ...state,
      };
    }
    case 'GET_USER_BY_ID_FULFILLED': {
      return {
        ...state,
        user: action.payload.data.data[0],
      };
    }
    case 'GET_USER_BY_ID_REJECTED': {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default getUserById;
