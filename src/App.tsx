import { CounterWithHook, Counter, LoginPage } from "./components"
import { BasicFunctions, ObjectLiterals, BasicTypes } from "./typescript"

function App() {
  return (
    <main>
      <h1>Fundamentos de React - Typescript</h1>
      <div>
        <BasicTypes/>
        <ObjectLiterals/>
        <BasicFunctions/>
        <Counter/>
        <CounterWithHook/>
        <LoginPage/>
      </div>
    </main>
  )
}

export default App
