import React from "react";

function ExpenseTable({ expenses, deleteExpense }) {
 
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "food":
        return "food";
      case "travel":
        return "travel";
      case "shopping":
        return "shopping";
      case "entertainment":
        return "entertainment";
      default:
        return "other";
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr>
            <td colSpan="4" className="empty">
              No expenses found
            </td>
          </tr>
        ) : (
          expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>
                <span className={`category-badge ${getCategoryColor(expense.category)}`}>
                  {expense.category}
                </span>
              </td>
              <td>
                <button className="delete-btn" onClick={() => deleteExpense(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
