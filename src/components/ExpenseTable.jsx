import React from "react";

function ExpenseTable({ expenses, deleteExpense }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Expenses List</h2>
      <table style={{ width: '100%', backgroundColor: 'white', borderRadius: '5px' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Expense</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{expense.expense}</td>
              <td>{expense.amount}</td>
              <td>
                <button
                  onClick={() => deleteExpense(index)}
                  style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '2px 8px', borderRadius: '3px' }}
                >
                  ×
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '10px', textAlign: 'right' }}>
        <strong>Total: {expenses.reduce((sum, exp) => sum + parseInt(exp.amount.replace('ksh. ', '')), 0)}</strong>
      </div>
    </div>
  );
}

export default ExpenseTable;
