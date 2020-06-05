import AuthConstants from "../constants/auth";

const INITIAL_STATE_AUTH = {
  accessToken: "",
  erroMessage: "",
  expirationTime: "",
  expiresIn: "",
  isLogged: false,
  tokenType: "",
};

const auth = (state = INITIAL_STATE_AUTH, action) => {
  switch (action.type) {
    case AuthConstants.AUTH_CALLBACK_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        erroMessage: "",
        expirationTime:
          new Date().getTime() + parseInt(action.payload.expiresIn),
        expiresIn: action.payload.expiresIn,
        isLogged: true,
        tokenType: action.payload.tokenType,
      };
    case AuthConstants.AUTH_CALLBACK_ERROR:
      return {
        ...state,
        accessToken: "",
        errorMessage: action.payload,
        expiresIn: "",
        isLogged: false,
        tokenType: "",
      };
    default:
      return state;
  }
};

export default auth;
