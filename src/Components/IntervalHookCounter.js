import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count,setCount] = useState(0)
    const increamentCount =()=>{
        setCount( preCount => preCount + 1)
    }
    useEffect(()=>{
        const interval = setInterval(increamentCount,1000)
        return ()=>{
            clearInterval(interval)
        }
    },[count])
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default IntervalHookCounter
