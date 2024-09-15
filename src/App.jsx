import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>   

      <h2>Counter</h2>
      <p>Count: {count}</p>
      <Button   
 label="Increment" onClick={increment} />
      <Button label="Decrement" onClick={decrement} />
      <Button label="Reset" onClick={reset} />
    </div>
  );
}

function Button({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

export default App
