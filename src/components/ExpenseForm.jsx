import React, { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.amount) return;

    const toAdd = {
      name: formData.name,
      description: formData.description || "",
      category: formData.category || "other",
      amount: Number(formData.amount) || 0,
      date: formData.date || new Date().toISOString()
    };

    addExpense(toAdd);
    setFormData({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: ""
    });
  };

  return (
    <div className="add-expense-section">
      <h2>Add Expense</h2>
      <form onSubmit={handleSubmit} className="expense-form">
        <input
          type="text"
          placeholder="Expense (e.g., Lunch, Groceries)"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="form-input"
        />

        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="form-input"
        />

        <input
          type="text"
          placeholder="Category (e.g., food, travel)"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className="form-input"
        />

        <input
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="form-input"
        />

        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="form-input"
        />

        <button type="submit" className="submit-button">Add to list</button>
      </form>
    </div>
  );
}

export default ExpenseForm;