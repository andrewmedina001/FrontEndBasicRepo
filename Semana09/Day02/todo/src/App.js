// import React from 'react'
import {useEffect,useState} from "react"

export default function App() {
  const [works,setWorks]=useState([45,23])
  const [work,setWork]=useState("txtAndrew")
  return (
    <div>
      <h1>App Andrew</h1>
      {works.map((item,index)=>(
        <li key={index}>{item}</li>
      ))}

      <input
        type="text"
        placeholder="Lavar la ropa"
        value={work}
        onChange={(e)=>{{setWork(e.target.value)}}}
        ></input>

    </div>
  )
}