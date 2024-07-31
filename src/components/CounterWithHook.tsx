import { useCounter } from "../hooks"

export const CounterWithHook = () => {
    const {count, increaseBy} = useCounter({initialValue:5});

  return (
    <>
      <h2>Custom Hooks</h2>
      <h3>Contador: <small>{count}</small> </h3>
      <div>
          <button onClick={() => increaseBy(-1)}>-1</button>
          <button onClick={() => increaseBy(+1)}>+1</button>
      </div>
    </>
  )
}
