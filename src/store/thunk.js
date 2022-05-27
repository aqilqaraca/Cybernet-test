import actions from "./actions"
import axios from "axios"
const postThunkAsync = (inputValue,label)=>(dispatch)=>{
    dispatch(actions.postLoadingAction())
    axios.post("http://localhost:3000/datas",{label, value : inputValue})
    .then(res=>dispatch(actions.postResAction(res)))
    .catch(err=>dispatch(actions.postErrorAction(err.message)))
}

export default postThunkAsync