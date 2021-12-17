import React, { useEffect, useState } from 'react'

function Example() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    useEffect(
        ()=>{
            console.log('I am UseEffect');
            document.title = `Count is ${count}`
        },[count]
    )
    return (
        <div>
            <button onClick={()=>setCount(preCount=>preCount+1)}>Click me</button>
            {count}            
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
    )
}

export default Example
