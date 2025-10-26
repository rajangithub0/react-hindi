import React from 'react'
import { useState } from 'react'

function Interview() {
    let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    
    // console.log('clicked', counter);

  }

  const removeValue = () => {
    if(counter===0){
      alert('next value is negtive')
    }
    setCounter(counter-1)
  }
  return (
    <>

    <div>
      <h1>Counter Application</h1>
      <h2>Counter Value :{counter} </h2>

      <span>
        <button
         onClick={addValue}>Increment Value
        </button> 
        <button
          onClick={removeValue}>Decrement Value
        </button>
       </span>
       <p>Footer:{counter}</p>
    </div>
    </>
  )
}

export default Interview