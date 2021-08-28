"use strict";
exports.__esModule = true;
exports.TransactionsProvider = exports.TransactionsContext = exports.transactionsContextValue = void 0;
var react_1 = require("react");
var react_2 = require("react");
exports.transactionsContextValue = {
    transactions: []
};
exports.TransactionsContext = react_2.createContext(exports.transactionsContextValue);
var TransactionsProvider = function (props) {
    var _a = react_2.useState(null), error = _a[0], setError = _a[1];
    var _b = react_2.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    var _c = react_2.useState({}), transactions = _c[0], setTransactions = _c[1];
    //GLOBAL TRANSACTION FILTERS FOR HISTORY AND DASHBOARD COMPONENT
    //...
    react_2.useEffect(function () {
        fetch("https://lazyinput-default-rtdb.firebaseio.com/transactions.json")
            .then(function (res) { return res.json(); })
            .then(function (result) {
            setIsLoaded(true);
            setTransactions(result);
        }, function (error) {
            setIsLoaded(true);
            setError(error);
        });
    }, [transactions]);
    return (<exports.TransactionsContext.Provider value={[transactions]}>
      {props.children}
    </exports.TransactionsContext.Provider>);
};
exports.TransactionsProvider = TransactionsProvider;
