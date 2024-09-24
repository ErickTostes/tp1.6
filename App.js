import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => acc + transaction.value, 0);
  };

  return (
    <div className="container">
      <h1>Controle Financeiro</h1>
      <h2>Saldo Total: R$ {calculateBalance().toFixed(2)}</h2>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
