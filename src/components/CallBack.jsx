import { useCallback, useState } from "react"
import { Increment } from "./Increment"

export const CallBack = () => {

    const [counter, setCounter] = useState(0);

    const fatherIncrement = useCallback((value) => {
        setCounter(contador => contador + value)
    },[])

  return (
    <>
        <h2>useCallBack</h2>
        <p>Counter: { counter }</p>
        <Increment fatherIncrement={ fatherIncrement } />
    </>
  )
}