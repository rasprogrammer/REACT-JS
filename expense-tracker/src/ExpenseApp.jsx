import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function ExpenseApp() {
  const [expenses, setExpenses] = useState(() => {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
  });

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    localStorage.setItem("expenses", JSON.stringify([...expenses, expense]));
  };

  const deleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
    localStorage.setItem("expenses", JSON.stringify(newExpenses));
  };

  const totalBalance = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);

  return (
    <div className="container">
      <h1>Mini Expense Tracker</h1>

      <div className="balance-container">
        <h2>Your Current Balance</h2>
        <div id="balance" className="balance">
          ${totalBalance.toFixed(2)}
        </div>
      </div>
      <ExpenseForm addExpense={addExpense} />

      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}
