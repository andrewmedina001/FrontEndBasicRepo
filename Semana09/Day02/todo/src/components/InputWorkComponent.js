
export default function InputWorkComponent({newWork,setNewWork,setWorks,works}) {
    const driveInput=(e)=>{
        setNewWork(e.target.value)
    }
    const addWork=()=>{
        setWorks([...works,newWork])
        setNewWork("")
    }
  return (
    <div>
        <input
            required="true"
            type="text"
            placeholder="Ingrese nueva Tarea"
            value={newWork}
            onChange={(e)=>{driveInput(e)}}
            onKeyUp={(e)=>{
                if(e.key==="Enter"){
                    addWork()
                }
            }}
            ></input>
        <button 
            onClick={()=>{addWork()}}
            >
                Add Work
            </button>
    </div>
  )
}
