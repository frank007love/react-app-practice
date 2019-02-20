import React, { useState, createContext } from "react"
import Counter from "./Counter"

export const CountCtx = createContext([0, () => {}])

function Example() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <CountCtx.Provider value={[count, setCount]}>
                <Counter />
                <button onClick={() => setCount(count + 1)}>parent button +1</button>
            </CountCtx.Provider>
        </div>
    )
}

export default Example