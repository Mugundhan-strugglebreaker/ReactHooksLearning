import React, { useMemo, useState } from 'react'

function UseMemoCounter() {
    const [counterOne,setCounterOne] =  useState(0)
    const [counterTwo,setCounterTwo] = useState(0)
    const increaseCountOne = ()=>{
        setCounterOne(counterOne+1)
    }
    const increaseCountTwo = ()=>{
        setCounterTwo(counterTwo+1)
    }
    const isEven = useMemo( ()=>{
        return counterOne % 2 === 0
    },[counterOne])

    return (
        <div>
            <h1>Count One = {counterOne} ---- {isEven ? 'Even' :'Odd'}  </h1>
            <button onClick={increaseCountOne}>Increase Count One</button>
            <h1>Count Two = {counterTwo} </h1>
            <button onClick={increaseCountTwo}>Increase Count Two</button>
        </div>
    )
}

export default UseMemoCounter
