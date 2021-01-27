export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        // send state without element with removed id
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        // action.payload - This is a new transaction
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
