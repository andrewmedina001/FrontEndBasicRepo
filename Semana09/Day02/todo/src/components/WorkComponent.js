
export default function WorkComponent({work,index,setWorks,works}) {
    const deleteWork=(index)=>{
        const worksTMP=[...works]
        worksTMP.splice(index,1)
        setWorks(worksTMP)
    }
    return (
    <li>
        <span>{work}</span>
        <button
            onClick={()=>{deleteWork(index)}}
            >
                Delete Work
        </button>
    </li>
    )
}