export const RegisteredData = (state, action) => {
  switch (action.type) {
    case "NEW_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "NEW_USERNAME":
      return {
        ...state,
        username: action.payload,
      };
    case "NEW_USER_CONTACT":
      return {
        ...state,
        phonenumber: action.payload,
      };
    case "NEW_USER_IMAGE":
      return {
        ...state,
        imageUrl: action.payload,
      };
    default:
      return { ...state };
  }
};
