import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchingData() {
    const [user,setUser] = useState({})
    const [id,setId] = useState(1)
    const [idFromButton,setIdFromButton] = useState(1)
    const clickHandler = ()=>{
        setIdFromButton(id)
    }
    useEffect(()=>{
        axios.get(`http://localhost:9000/getUser/${idFromButton}`)
            .then((response)=>{
                console.log(response);
                setUser(response.data)
            })
            .catch((err)=>{
                console.log(err);
            })
    },[idFromButton])
    return (
        <div>
            <input type='text' value={id} onChange={e=> setId(e.target.value)}/>
            <button onClick={clickHandler}>Fetch Data</button>
            {
                <h1>{user.name} {user.phone}</h1>
            }
            {/* <ul>
            {
                users.map(user=> {
                    return <li key={user.id}>{user.name} {user.phone}</li>
                })
            }
            </ul> */}
        </div>
    )
}
export default FetchingData
