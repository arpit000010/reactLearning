import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  const addValue = () => {
    setCounter((counter)=> counter+1)
    setCounter((counter)=> counter+1)
    setCounter((counter)=> counter+1)
    setCounter((counter)=> counter+1)
    setCounter((counter)=> counter+1)
  }
  const subValue = () => {
    setCounter(counter-1)
    
  }

  // let counter = 15
  // const addValue = () => {
  //   counter = counter + 1
  //   console.log(counter)
  // } 
  return (
    <>
      <h1>React Course with hitesh {counter}</h1>
      <h2>Counter value : {counter} </h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <button
        onClick={subValue}
      >Remove Value</button> {" "}
      <p>footer: {counter} </p>
    </>
  )
}

export default App
