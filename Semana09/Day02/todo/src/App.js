import {useState} from "react"

export default function App() {
  const [works,setWorks]=useState(["Work001","Work002"])
  const [work,setWork]=useState("WorkToChange")
  const addWork=()=>{
    setWorks([...works,work])
    setWork("")
  }
  const deleteWork=(indice)=>{
    let worksTMP=[...works]
    worksTMP.splice(indice,1)
    setWorks(worksTMP)
  }
  return (
    <div>
      <h1>App Andrew</h1>
      {works.map((item,index)=>(
        <div key={index}>
          <li >{item}</li>
          <button onClick={()=>{deleteWork(index)}}>
            Delete Work
          </button>
        </div>
        
      ))}
      <input
        type="text"
        placeholder="Lavar la ropa"
        value={work}
        onChange={(e)=>{{setWork(e.target.value)}}}
        ></input>

        <button onClick={()=>{addWork()}}>
          Add Work
        </button>

    </div>
  )
}