import React,{useState} from 'react'

function HookCounterFour() {
    const [items ,setItem] =useState([])
    const addValue = ()=>{
        setItem([...items,{
            id : items.length,
            value : Math.floor(Math.random() * 1000)+1
        }])
    }
    return (
        <div>
            <button onClick={addValue}>Add</button>
            <ul>
                {
                    items.map( item => <li key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default HookCounterFour
