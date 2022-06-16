import { NOME } from '../actions/actions';

const INITIAL_STATE = {
  login: {
    login: '',
    email: '',
  },
  home: {
    user: {},
    movies: [],
    bgHeader: false,
    feature: null,
    loading: false,
  },
  profileEdit: {
    user: {},
    profileImage: '',
  },
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case NOME:
    return {
      ...state,
      nome: action.value,
    };
  default:
    return state;
  }
};

export default reducers;
