import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import "./App.css";

function App() {
  // Initialize state from localStorage, or empty array if no data exists
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const filteredExpenses = expenses.filter((expense) =>
    (expense.name && expense.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (expense.description && expense.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (expense.category && expense.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="app-container">
     

      <div className="main-content">
        <div className="form-section">
          <h1 className="left-title">Expense Tracker</h1>
          <p className="subtitle left-sub">Start taking control of your finances and life decisions.</p>
          <p className="subtitle left-sub">Categorize and analyze your spending.</p>
          <ExpenseForm addExpense={addExpense} />
        </div>
        <div className="table-section">
          <div className="search-container table-search">
            <input
              type="text"
              placeholder="Search expenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <ExpenseTable expenses={filteredExpenses} deleteExpense={deleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
