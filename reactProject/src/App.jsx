import { useState } from "react"
import "./App.css"
const App = () => {
  const [user,setUser] = useState("Sangam")
  const changeUser = () => {
    setUser("Shyam")
    setUser("hey")
  }
 
  return (
  <div>
    <h1>Hello From React. I am {user}</h1>
    <button onClick={changeUser}>Click</button>
  </div>
  )
}

export default App;