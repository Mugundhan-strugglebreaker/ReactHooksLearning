import React,{useEffect, useState} from 'react'

function HookMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const logPosition = (e)=>{
        console.log("Mouse Action");
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("UseEffect Called");
        window.addEventListener('mousemove',logPosition)
        return ()=>{
            console.log("Cancel Listener");
            window.removeEventListener('mousemove',logPosition)
        }
    },[])
    return (
        <div>
            <h1>X - {x}</h1>
            <h1>Y - {y}</h1>
        </div>
    )
}

export default HookMouse

//Mugundhan