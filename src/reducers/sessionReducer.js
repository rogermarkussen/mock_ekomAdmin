import * as actionTypes from 'src/actions';

const initialState = {
  loggedIn: true,
  user: {
    first_name: 'Roger',
    last_name: 'Markussen',
    email: 'rom@nkom.no',
    avatar: './images/avatars/roger.png',
    bio: 'EkomGuru',
    role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
  }
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SESSION_LOGIN: {
      return {
        ...initialState
      };
    }

    case actionTypes.SESSION_LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        user: {
          role: 'GUEST'
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default sessionReducer;
