import React, { useState } from 'react'

function Clickcounter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <button onClick={() => setCount(c => c+1)} > count {count} </button>
    </div>
  )
}

export default Clickcounter