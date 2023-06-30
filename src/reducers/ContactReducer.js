
export const ContactReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload.value,
      };

    case "SET_PHONE":
      return {
        ...state,
        phone: action.payload.value,
      };

    case "SET_CONTENT":
      return {
        ...state,
        content: action.payload.value,
      };

    case "TYPE_EMAIL":
      return {
        ...state,
        emailFormatError: false,
        email: action.payload.value,
      };

    case "CHECK_TRUE":
      return {
        ...state,
        check: true,
      };

    case "EMAIL_ERROR":
      return {
        ...state,
        emailFormatError: true,
      };

    case "ENABLE_BUTTON":
      return {
        ...state,
        btnDisabled: false
      };

    case "BEFORE_SEND_EMAIL":
      return {
        ...state,
        emailFormatError: false,
        check: false,
        btnDisabled: true
      };

    default:
      throw new Error(`不存在的 action type: ${action.type}`);
  }
};
