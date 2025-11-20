import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, deleteExpense }) {
  return (
    <>
      <section className="history">
        <h3>Expense List</h3>
        <ul id="list" className="list">
          {expenses.map((expense, index) => (
            <ExpenseItem
              key={index}
              expense={expense}
              deleteExpense={() => deleteExpense(index)}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
