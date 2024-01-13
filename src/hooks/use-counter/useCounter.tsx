import { useState } from "react";
import { UseCounterProps } from "./useCounter.types";

export const UseCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((prev) => ++prev);
  const decrement = () => setCount((prev) => --prev);

  return { count, increment, decrement };
};
