import React, { useState, useEffect } from "react";

const History = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});

  async function fetchData() {
    const data = await fetch(
      "https://lazyinput-default-rtdb.firebaseio.com/transactions"
    );
    data
      .json()
      .then((data) => setData(data))
      .catch((err) => setErrors(err));
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <div>
        <div>
          <h3>History</h3>
          {/* <th>
            {dataToArray.map((transactions) => {
              <tr key={transactions.id}>
                <td>{transactions.option}</td>
                <td>{transactions.text}</td>
                <td>{transactions.amount}</td>
              </tr>;
            })}
          </th> */}
        </div>
      </div>
    </div>
  );
};

export default History;
