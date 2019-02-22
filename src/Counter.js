import React, { useContext } from "react"
import { CountCtx } from "./Example"

function Counter() {
    const [count, setCounter] = useContext(CountCtx)
    return (
        <>
            <div aria-label="counter-val">Counter is {count}</div>
            <button onClick={() => {setCounter(count + 5);
            console.log('shit:', count);    
        }}>child button +5</button>
        </>
    )
}

export default Counter