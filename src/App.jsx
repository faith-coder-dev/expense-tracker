import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([
    { expense: "Groceries", amount: "ksh. 2500" },
    { expense: "Transport", amount: "ksh. 800" },
    { expense: "Internet Bill", amount: "ksh. 1500" },
    { expense: "Electricity", amount: "ksh. 1200" },
    { expense: "Rent", amount: "ksh. 15000" }
  ]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (indexToDelete) => {
    const updatedExpenses = expenses.filter((_, index) => index !== indexToDelete);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="container">
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default App;
