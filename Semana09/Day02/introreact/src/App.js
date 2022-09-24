// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Change this line
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { useState,useEffect } from "react"

import List from "./components/List"

const App=()=>{
  let txt="<<Texto en Props>>"
  let [count,setCounter]=useState(35)
  let [name,setName]=useState("H")
  const funcHellow=()=>{
    return "Hellow"
  }
  console.log("Inside Application")
  useEffect(()=>{
    console.log("Change detected in useEffect.")
  },[count])

  return (
    <>
    <div>
      {console.log("Inside JSX")}
    </div>
      <div>
        <p>{txt}</p>
        <p>{funcHellow()}</p>
        <p>
        Contador: {count}
        </p>
        <p>
          Name: {name}
        </p>
      </div>
      <button onClick={()=>{setCounter(count*=2)}}>
        Aumentar
      </button>

      <button onClick={()=>{setCounter(count=1)}}>
        Reestablecer
      </button>
      
      <button onClick={()=>{setName(name+="A")}}>
        Change Name
      </button>
      <hr/>
      
      <List miTexto={txt}/>
      <List miTexto="Texto Versace"/>
      <List miTexto="Texto Gucci"/>
      <List miTexto={6*4}/>
    </>
  )
}

export default App;