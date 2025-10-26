import React from 'react'

const CounterApp = () => {
    let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1)
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

export default CounterApp