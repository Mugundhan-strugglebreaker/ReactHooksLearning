import React,{useState} from 'react'

function HookCounterThree() {
    const [name ,setName] =  useState({username:'',phone:''})
    return (
        <div>
            <form>
                <input type='text' value={name.username} onChange={e=>setName({...name,username : e.target.value})}/>
                <input type='text' value={name.phone}  onChange={e=>setName({...name,phone : e.target.value})}/>
            </form>
            <h2>Username : {name.username}</h2>
            <h2>Phone : {name.phone}</h2>
            <h2>{JSON.stringify (name)}</h2>
        </div>
    )
}

export default HookCounterThree
