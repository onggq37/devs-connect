import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

const initialState = {
  profile: null, //either your own profile or other user profile
  profiles: [], //list of developer
  repos: [],
  loading: true,
  error: {},
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default profileReducer;
