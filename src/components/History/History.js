import React, { useState, useEffect } from "react";

const History = () => {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});

  async function fetchData() {
    const res = await fetch(
      "https://lazyinput-default-rtdb.firebaseio.com/transactions"
    );
    res
      .json()
      .then((res) => setData(res))
      .catch((err) => setErrors(err));
    console.log(res);
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="layout__section">
      <div className="layout__wrapper">
        <div className="layout__container">
          <h3>History</h3>
          <ul>{JSON.stringify(data)}</ul>
          <ul>{JSON.stringify(hasError)}</ul>
        </div>
      </div>
    </div>
  );
};

export default History;
