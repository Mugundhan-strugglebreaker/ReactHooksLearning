import React, { useState } from 'react'
import useCounter from '../hooks/useCounter'

function CountTwo() {
    const [count,increment,decrement,reset]=useCounter(0,1)
    return (
        <div>
            Count is {count}
            <button onClick={increment}>Increament</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CountTwo
