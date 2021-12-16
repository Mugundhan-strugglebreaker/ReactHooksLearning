import React,{useState} from 'react'

function HookCounter() {
    const [count,increamentValue] = useState(0)
    return (
        <div>
            <button onClick={()=>increamentValue(count+1)}>Count {count} times Mugundhan</button>
        </div>
    )
}

export default HookCounter
