import { CounterWithHook, Counter, LoginPage, UsersPage, FormsPage } from "./components"
import { BasicFunctions, ObjectLiterals, BasicTypes } from "./typescript"

function App() {
  return (
    <main>
      <h1>Fundamentos de React - Typescript</h1>
      <div>
        <BasicTypes />
        <ObjectLiterals />
        <BasicFunctions />
        <Counter />
        <CounterWithHook />
        <LoginPage />
        <UsersPage />
        <FormsPage />
      </div>
    </main>
  )
}

export default App
