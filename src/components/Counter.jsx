import { useCounter } from "../hooks/useCounter";

export const Counter = () => {

    const { counter, increment, subtract, reset } = useCounter();

  return (
    <>
        <h1>Counter: {counter}</h1>
        <button onClick={increment}>+1</button>
        <button onClick={subtract}>-1</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}