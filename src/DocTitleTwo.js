import React, { useEffect, useState } from 'react'
import useDocumentTitle from './hooks/useDocumentTitle'

function DocTitleTwo() {
    const [count,setCount] = useState(0)
    useDocumentTitle(count)
    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>Count {count} times</button>
        </div>
    )
}

export default DocTitleTwo