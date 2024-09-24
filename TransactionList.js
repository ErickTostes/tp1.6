import React from 'react';

function TransactionList({ transactions }) {
  return (
    <ul className="transaction-list">
      {transactions.map((transaction, index) => (
        <li key={index} className={transaction.value > 0 ? 'income' : 'expense'}>
          {transaction.description}: R$ {Math.abs(transaction.value).toFixed(2)}
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;
