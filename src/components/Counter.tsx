import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState<number>(10)

    const increaseCounter = () => setCount(count + 1)
    const decreaseCounter = () => setCount(count - 1)
  return (
    <>
    <h2>Hooks (useState)</h2>
    <h3>Contador: <small>{count}</small> </h3>
    <div>
        <button onClick={decreaseCounter}>-1</button>
        <button onClick={increaseCounter}>+1</button>
    </div>
    </>
  )
}
