import React, { useReducer,useEffect } from 'react'
import axios from 'axios'
const initialState = {
    loading : true,
    error : '',
    user : {}
}
const reducer = (state,action)=>{
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading : false,
                error : '',
                user : action.payload
            }
        case 'FETCH_FAIL':
            return {
                loading : false,
                error : 'Something went wrong',
                user : {}
            }
        default:
            return state
    }
}
function FetchingTwo() {
    const [state,dispath]= useReducer(reducer,initialState)
    useEffect(()=>{
        axios.get("http://localhost:9000/getUser/13")
            .then(response=>{
                dispath({ type:'FETCH_SUCCESS',payload:response.data})
            })
            .catch(err=>{
                dispath({type : 'FETCH_FAIL'})
            })
    },[])
    return (
        <div>
            {
                state.loading ? 'Loading' : <h1> {state.user.name}-- {state.user.phone}</h1> 
            }
            {
                state.error ? state.error : null
            }
        </div>
    )
}

export default FetchingTwo
