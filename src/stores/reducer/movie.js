const initialState = {
  movies: [],
  msg: '',
};

const getMovieById = (state = initialState, action) => {
  switch (action.type) {
    case 'GETMOVIEBYID_PENDING': {
      return {
        ...state,
        error: true,
        loading: true,
        message: '',
      };
    }
    case 'GETMOVIEBYID_FULFILLED': {
      return {
        ...state,
        error: false,
        loading: false,
        movies: action.payload.data.data,
        message: action.payload.data.message,
      };
    }
    case 'GETMOVIEBYID_REJECTED': {
      return {
        ...state,
        error: false,
        loading: false,
        message: action.payload.response.data.message,
      };
    }

    case 'GETALLMOVIE_PENDING': {
      return {
        ...state,
        error: true,
        loading: true,
        message: '',
      };
    }
    case 'GETALLMOVIE_FULFILLED': {
      return {
        ...state,
        error: false,
        loading: false,
        movies: action.payload.data.data,
        message: action.payload.data.message,
      };
    }
    case 'GETALLMOVIE_REJECTED': {
      return {
        ...state,
        error: false,
        loading: false,
        message: action.payload.response.data.message,
      };
    }
    default: {
      return state;
    }
  }
};

export default getMovieById;
