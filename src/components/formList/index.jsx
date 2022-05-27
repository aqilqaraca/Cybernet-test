import { useContext } from "react"
import { globalContext } from "../../context"
import AddingForm from "../addingForm"
const FormList = ()=>{
    const {inputsAttr} = useContext(globalContext)
    return (
        <div className="flex flex-col gap-3">
            {
                inputsAttr.map(input=>(
                    <AddingForm key={input.id} id={input.id} type={input.type} label={input.label} placeholder={input.placeholder}/>
                ))
            }
        </div>
    )
}

export default FormList