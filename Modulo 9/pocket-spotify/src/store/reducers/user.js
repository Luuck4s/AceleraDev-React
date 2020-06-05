import UserConstants from "../constants/user";

const INITIAL_STATE_USER = {
  email: "",
  errorMessage: "",
  name: "",
  status: "",
  thumb: "",
};

const user = (state = INITIAL_STATE_USER, action) => {
  switch (action.type) {
    case UserConstants.GET_USER_DATA:
      return {
        ...state,
        status: "running",
      };
    case UserConstants.GET_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        status: "success",
      };
    case UserConstants.GET_USER_FAILED:
      return {
        ...state,
        errorMessage: action.payload.message,
        status: "error",
      };
    default:
      return state;
  }
};

export default user;
