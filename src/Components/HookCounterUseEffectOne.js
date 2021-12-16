import React,{useState,useEffect} from 'react'

function HookCounterUseEffectOne() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    useEffect(
        ()=>{
            console.log("useEffect - Document title Updating");
            document.title = `Count ${count} times`
        },[count]
    )
    return (
        <div>
            <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Count {count} times</button>        
        </div>
    )
}

export default HookCounterUseEffectOne
