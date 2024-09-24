import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isIncome, setIsIncome] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !value) return;

    const transactionValue = isIncome ? parseFloat(value) : -parseFloat(value);
    const newTransaction = { description, value: transactionValue };

    addTransaction(newTransaction);
    setDescription('');
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label>
        <input
          type="radio"
          value="receita"
          checked={isIncome}
          onChange={() => setIsIncome(true)}
        />
        Receita
      </label>
      <label>
        <input
          type="radio"
          value="despesa"
          checked={!isIncome}
          onChange={() => setIsIncome(false)}
        />
        Despesa
      </label>
      <button type="submit">Adicionar Transação</button>
    </form>
  );
}

export default TransactionForm;
