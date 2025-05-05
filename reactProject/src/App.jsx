import { useState } from "react";

const App = ()=> {
   const [username ,setUsername] = useState('')

   const formHandler = (e)=>{
    e.preventDefault();
    console.log(username);
    setUsername('')
   }
  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e)
      }}>
        <input value={username} onChange={
          (e)=>{
            setUsername(e.target.value)
          }
        } type="text" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;