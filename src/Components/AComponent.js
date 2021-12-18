import React,{useContext} from 'react'
import { CounterContext } from '../App'

function AComponent() {
    const countContext=useContext(CounterContext)
    return (
        <div>
            <div>
            <h1>Count - {countContext.countState}</h1>
            <button onClick={()=>countContext.dispathState('increment')}>Increment</button>
            <button onClick={()=>countContext.dispathState('decrement')}>Decrement</button>
            <button onClick={()=>countContext.dispathState('reset')}>Reset</button>
        </div>
        </div>
    )
}

export default AComponent
