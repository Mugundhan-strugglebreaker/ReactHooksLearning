import React, { useState } from 'react'
import HookMouse from './HookMouse'

function HookContainer() {
    const [display,setDisplay]= useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle button</button>
            {
                display ? <HookMouse/> : null
            }
        </div>
    )
}

export default HookContainer
