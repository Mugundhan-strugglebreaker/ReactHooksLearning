import axios from 'axios'
import React,{useEffect, useState} from 'react'

function FetchingDataOne() {
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState('')
    const [user,setUser] = useState({})
    useEffect(()=>{
        axios.get("http://localhost:9000/getUser/13")
            .then(response=>{
                setLoading(false)
                setError('')
                setUser(response.data)
            })
            .catch(err=>{
                setLoading(false)
                setUser({})
                setError('Something went wrong')
            })
    },[])
    return (
        <div>
            {
                loading ? 'Loading' : <h1> {user.name}-- {user.phone}</h1> 
            }
            {
                error ? error : null
            }
        </div>
    )
}

export default FetchingDataOne
