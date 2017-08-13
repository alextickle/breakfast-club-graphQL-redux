const receiveLogin = (state, action) => {
  switch (action.type) {
    case "RECEIVE-LOGIN":
      return Object.assign({}, state, {
          user: action.data
        }
      });
    default:
      return state;
  }
};

export default requestLogin;