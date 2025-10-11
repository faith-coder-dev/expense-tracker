import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("");


  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };


  const deleteExpense = (indexToDelete) => {
    const updatedExpenses = expenses.filter((_, index) => index !== indexToDelete);
    setExpenses(updatedExpenses);
  };

  const handleSort = (field) => {
    setSortField(field);
  };

 
  let filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortField) {
    filteredExpenses.sort((a, b) => a[sortField].localeCompare(b[sortField]));
  }

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <ExpenseForm addExpense={addExpense} />

      <div className="sort-buttons">
        <button onClick={() => handleSort("description")}>Sort by Description</button>
        <button onClick={() => handleSort("category")}>Sort by Category</button>
      </div>

      <ExpenseTable expenses={filteredExpenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
