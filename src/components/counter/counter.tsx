import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => ++count)}>Increment</button>
      <br />
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <br />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
};
