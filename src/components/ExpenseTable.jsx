import React from "react";

function ExpenseTable({ expenses, deleteExpense }) {
  const total = expenses.reduce((sum, e) => sum + (Number(e.amount) || 0), 0);

  return (
    <div className="expense-table-container">
      <table className="expense-table">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 && (
            <tr>
              <td className="empty" colSpan={6}>No expenses to show</td>
            </tr>
          )}

          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{Number(expense.amount).toLocaleString()}</td>
              <td>{expense.date ? new Date(expense.date).toLocaleDateString() : new Date().toLocaleDateString()}</td>
              <td>
                <button className="delete-button" onClick={() => deleteExpense && deleteExpense(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} style={{ textAlign: 'right', fontWeight: 700 }}>Total:</td>
            <td style={{ fontWeight: 700 }}>{total.toLocaleString()}</td>
            <td colSpan={2}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ExpenseTable;
