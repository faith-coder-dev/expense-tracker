import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("500");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense || !amount) return;

    addExpense({ expense, amount: `ksh. ${amount}` });
    setExpense("");
    setAmount("500");
  };

  return (
    <div>
      <select
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        style={{ width: '200px', padding: '5px', marginRight: '10px' }}
      >
        <option value="">Water</option>
        <option value="Groceries">Groceries</option>
        <option value="Transport">Transport</option>
        <option value="Internet Bill">Internet Bill</option>
        <option value="Electricity">Electricity</option>
        <option value="Rent">Rent</option>
        <option value="buy clothes">buy clothes</option>
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: '100px', padding: '5px', marginRight: '10px' }}
      />
      <button
        onClick={handleSubmit}
        style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px' }}
      >
        Add Expense
      </button>
    </div>
  );
}

export default ExpenseForm;
