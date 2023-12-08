import { useState, useRef } from 'react';
import './App.css';

function App() {

  const [city, setCity] = useState("");
  const inputRef = useRef();
  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <div className="App">
    <input 
    ref={inputRef}
    value={city} 
    onChange={e => setCity(e.target.value)}/>
    <p>I want to go to {city}</p>
    <button onClick={focus}>UseRef</button>
    </div>
  );
}

export default App;
