import React, { useEffect, useRef, useState } from 'react'

function HookTimer() {
    const [time,setTimer]=useState(0)
    const timeRef=useRef()
    useEffect(()=>{
        timeRef.current = setInterval(()=>{
            setTimer(preTimer => preTimer + 1 )
        },1000)
        return ()=>{
            clearInterval(timeRef.current)
        }
    },[])
    return (
        <div>
            Timer is - {time}
            <button onClick={()=>clearInterval(timeRef.current)}>Clear Interval</button>
        </div>
    )
}

export default HookTimer
