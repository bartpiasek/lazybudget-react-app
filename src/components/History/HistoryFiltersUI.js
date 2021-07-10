//FILTER BY TYPE OF CASHFLOW
export const incomeFilter = (
  <div className="table">
    {transactionsValues.map((transaction, key) => {
      return transaction.option === "income" ? (
        <div key={key}>
          <TransactionRow
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
            option={transaction.option}
            date={transaction.date}
            category={transaction.category}
          />
        </div>
      ) : null;
    })}
  </div>
);

export const expenseFilter = (
  <div className="table">
    {transactionsValues.map((transaction, key) => {
      return transaction.option === "expense" ? (
        <div key={key}>
          <TransactionRow
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
            option={transaction.option}
            date={transaction.date}
            category={transaction.category}
          />
        </div>
      ) : null;
    })}
  </div>
);

//FILTER BY CATEGORY
export const categoryFoodFilter = (
  <div className="table">
    {transactionsValues.map((transaction, key) => {
      return transaction.category === "food" ? (
        <div key={key}>
          <TransactionRow
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
            option={transaction.option}
            date={transaction.date}
            category={transaction.category}
          />
        </div>
      ) : null;
    })}
  </div>
);

export const categoryHousingFilter = (
  <div className="table">
    {transactionsValues.map((transaction, key) => {
      return transaction.category === "housing" ? (
        <div key={key}>
          <TransactionRow
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
            option={transaction.option}
            date={transaction.date}
            category={transaction.category}
          />
        </div>
      ) : null;
    })}
  </div>
);

export const categoryBillsFilter = (
  <div className="table">
    {transactionsValues.map((transaction, key) => {
      return transaction.category === "bills" ? (
        <div key={key}>
          <TransactionRow
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
            option={transaction.option}
            date={transaction.date}
            category={transaction.category}
          />
        </div>
      ) : null;
    })}
  </div>
);

export const categoryEntertainmentFilter = (
  <div className="table">
    {transactionsValues.map((transaction, key) => {
      return transaction.category === "entertainment" ? (
        <div key={key}>
          <TransactionRow
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
            option={transaction.option}
            date={transaction.date}
            category={transaction.category}
          />
        </div>
      ) : null;
    })}
  </div>
);

export const categoryMiscFilter = (
  <div className="table">
    {transactionsValues.map((transaction, key) => {
      return transaction.category === "misc" ? (
        <div key={key}>
          <TransactionRow
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
            option={transaction.option}
            date={transaction.date}
            category={transaction.category}
          />
        </div>
      ) : null;
    })}
  </div>
);

export const categorySavingFilter = (
  <div className="table">
    {transactionsValues.map((transaction, key) => {
      return transaction.category === "saving" ? (
        <div key={key}>
          <TransactionRow
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
            option={transaction.option}
            date={transaction.date}
            category={transaction.category}
          />
        </div>
      ) : null;
    })}
  </div>
);

//FILTER BY TIME
export const thisMonthFilter = (
  <div className="table">
    {transactionsValues.map((transaction, key) => {
      return transaction.category === "saving" ? (
        <div key={key}>
          <TransactionRow
            key={transaction.id}
            text={transaction.text}
            amount={transaction.amount}
            option={transaction.option}
            date={transaction.date}
            category={transaction.category}
          />
        </div>
      ) : null;
    })}
  </div>
);
