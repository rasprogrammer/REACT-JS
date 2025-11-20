import { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      addExpense({ itemName, amount });
      setItemName("");
      setAmount("");
    };

  return (
    <>
      <section className="add-transaction">
        <h3>Add New Transaction</h3>
        <form id="expense-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              id="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Enter description..."
              autoComplete="off"
              required
            />
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
              autoComplete="off"
              required
            />
            <button className="btn" type="submit">
              Add Transaction
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
