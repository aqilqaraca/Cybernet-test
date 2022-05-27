const POST_LOADING = "POST_LOADING";
const POST_ERROR = "POST_ERROR";
const POST_RES = "POST_RES";

const postLoadingAction = ()=>{
    return {
        type : POST_LOADING
    }
}

const postErrorAction = (payload)=>{
    return {
        type : POST_ERROR,
        payload
    }
}

const postResAction = (payload)=>{
    return {
        type : POST_RES,
        payload
    }
}

export default{
    postErrorAction,
    postLoadingAction,
    postResAction,
    POST_ERROR,
    POST_LOADING,
    POST_RES
}