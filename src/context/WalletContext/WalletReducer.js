export default (state, action) => {
  switch (action.type) {
    case "CREATE_TRANSACTION_START":
      return {
        transaction: false,
      };
    case "CREATE_TRANSACTION_SUCCESS":
      return {
        transaction: true,
      };
    case "DELETE_TRANSACTION_SUCCESS":
      return {
        transaction: true,
      };
    default:
      return {
        ...state,
      };
  }
};
