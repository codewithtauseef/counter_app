import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { h } from 'preact'

export function App() {
  let[counter, setCounter]= useState(1);

  // for increasing number
  const increaseNumber =()=>{
    setCounter(counter + 1)
  }

  // for decreasing number
  const decreaseNumber =()=>{
    setCounter(counter - 1)
  }
  return(
    <div>
      <h1>Code With Qasmi</h1>
      <h2>Counting Number: {counter}</h2>
      <button onClick={increaseNumber}>Increase Number</button>
      <button onClick={decreaseNumber}>Decrease Number</button>
    </div>
    
  )
}
