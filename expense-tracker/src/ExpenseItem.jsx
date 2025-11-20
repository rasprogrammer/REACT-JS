export default function ExpenseItem({ expense, deleteExpense }) {
  return (
    <>
      <li>
        {expense.itemName} 
        <span>
          {expense.amount < 0
            ? `-$${Math.abs(expense.amount)}`
            : `+$${expense.amount}`}
        </span>
        <button onClick={deleteExpense} className="delete-btn">
          x
        </button>
      </li>
    </>
  );
}
