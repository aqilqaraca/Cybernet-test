import { createContext,useState } from "react";

export const globalContext = createContext()


const Context = ({children})=>{
    const [inputsAttr,setInputsAttr] = useState([])
    return (
        <globalContext.Provider value={{inputsAttr,setInputsAttr}}>
            {children}
        </globalContext.Provider>
    )
}

export default Context