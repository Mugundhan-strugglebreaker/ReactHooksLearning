import React from 'react'

function Button({ changeFunction , children}) {
    console.log(`Rendering ${children}`);
    return (
        <div>
            <button onClick={changeFunction}>{children}</button>
        </div>
    )
}

export default React.memo(Button)
