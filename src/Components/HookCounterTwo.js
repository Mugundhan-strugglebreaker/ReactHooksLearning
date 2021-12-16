import React,{useState} from 'react'

function HookCounterTwo() {

    const initialCount = 0;
    const [count,setCount] =  useState(0)
    const increamentFive = ()=>{
        for(let i=0;i<5;i++){
            setCount( preCount => preCount +1)
        }
    }
    return (
        <div>
            Count is {count}
            <button onClick={()=>setCount( preCount => preCount +1)}>Increament +</button>
            <button onClick={()=>setCount( preCount => preCount -1)}>Decreament -</button>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={increamentFive}>Increament Five</button>
        </div>
    )
}

export default HookCounterTwo
