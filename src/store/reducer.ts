import * as ActionTypes from "./actionTypes";
const initialState = {
  loggedInUser: null,
  loginState: "LOGGED_OUT",
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return {
        ...state,
        loggedInUser: action.payload.user,
        loginState: "LOGGED_IN",
      };
    case ActionTypes.LOGOUT_USER:
      return {
        ...state,
        loggedInUser: null,
        loginState: "LOGGED_OUT",
      };

    default:
      return state;
  }
};

export default reducer;
