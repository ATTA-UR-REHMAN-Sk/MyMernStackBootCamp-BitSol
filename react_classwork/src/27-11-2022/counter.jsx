import React from 'react'
import { useState } from 'react'

export const Counter = () => {
const [count,setCount] =useState(0)

const handleClick=()=>{

  setCount(count+1)
}
const handleMinus=()=>{
  if(count>0)
  setCount(count-1)
}
const handleReset=()=>{

  setCount(0)
}

  return (
<>

<div> {count<=0?"zero":count}</div>

    <button onClick= {()=>handleMinus()} > -   </button>
    <button onClick={()=>handleClick()} > +   </button>
    <button onClick ={()=>handleReset()} > Reset   </button>
</>
  )
}

export default Counter
