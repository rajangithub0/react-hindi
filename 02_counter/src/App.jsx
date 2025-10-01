import { useState } from 'react';


import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1)
    // console.log('clicked', counter);

  }

  const removeValue = () => {
    setCounter(counter-1)
  }

  return (
    <>

      <h1>Counter Application</h1>
      <h2>Counter Value :{counter} </h2>

      <button
        onClick={addValue}>Increment Value</button>
      <button
        onClick={removeValue}>Decrement Value</button>
    </>
  )
}

export default App