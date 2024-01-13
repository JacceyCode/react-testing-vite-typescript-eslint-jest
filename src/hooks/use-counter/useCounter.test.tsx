import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import { UseCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(UseCounter);

    expect(result.current.count).toBe(0);
  });

  test("should accept and render the same initial count", () => {
    const { result } = renderHook(UseCounter, {
      initialProps: {
        initialCount: 10,
      },
    });

    expect(result.current.count).toBe(10);
  });

  test("should increase the count", () => {
    const { result } = renderHook(UseCounter, {
      initialProps: {
        initialCount: 7,
      },
    });

    act(() => result.current.increment());

    expect(result.current.count).toBe(8);
  });

  test("should decrease the count", () => {
    const { result } = renderHook(UseCounter, {
      initialProps: {
        initialCount: 4,
      },
    });

    act(() => result.current.decrement());

    expect(result.current.count).toBe(3);
  });
});
