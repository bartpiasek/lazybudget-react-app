import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Transaction } from "./Transaction";
import axios from "axios";

function History() {
  // const { transactions } = useContext(GlobalContext);
  // const [data, setData] = useState({ transactions: [] });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       "https://lazyinput-default-rtdb.firebaseio.com/transactions"
  //     );
  //     setData(result.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="layout__section">
      <div className="layout__wrapper">
        <div className="layout__container">
          <h3>History</h3>
          <ul>
            {/* {transactions.map((transaction) => (
              <Transaction
                className="layout__container-background"
                key={transaction.id}
                transaction={transaction}
              />
            ))} */}
            {/* {data.transactions.map((item) => (
              <li key={item.id}>
                <p>{item.text}</p>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default History;
