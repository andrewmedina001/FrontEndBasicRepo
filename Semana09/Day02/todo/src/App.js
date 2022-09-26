import { useState } from "react"
import WorkComponent from "./components/WorkComponent"
import InputWorkComponent from "./components/InputWorkComponent"

export default function App() {
    const [works,setWorks]=useState(["Work001","Work002","Work003"])
    const [newWork,setNewWork]=useState(["Versace"])
  return (
    <div>
        <h1>Title Andrew in H1</h1>
        {works.map((item,i)=>(
            <WorkComponent
                key={i}
                work={item}
                index={i}
                setWorks={setWorks}
                works={works}
            />
        ))}
        <InputWorkComponent
            newWork={newWork}
            setNewWork={setNewWork}
            setWorks={setWorks}
            works={works}
            ></InputWorkComponent>
    </div>
  )
}
