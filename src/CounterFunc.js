import React, { useState } from "react"

function CounterFunc() {
    const [ count, setCount ] = useState(0);

    return (
        <>
            <div>This is a example: {count}.</div>
            <button onClick={()=>setCount(count+1)}>count+1</button>
        </>
    )
}

export default CounterFunc