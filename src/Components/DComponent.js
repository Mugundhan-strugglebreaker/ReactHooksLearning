import React,{useContext} from 'react'
import EComponent from './EComponent'
import { CounterContext } from '../App'

function DComponent() {
    const countContext=useContext(CounterContext)
    return (
        <div>
            <div>
            <h1>Count - {countContext.countState}</h1>
            <button onClick={()=>countContext.dispathState('increment')}>Increment</button>
            <button onClick={()=>countContext.dispathState('decrement')}>Decrement</button>
            <button onClick={()=>countContext.dispathState('reset')}>Reset</button>
        </div>
        <EComponent></EComponent>
        </div>
        
    )
}

export default DComponent
