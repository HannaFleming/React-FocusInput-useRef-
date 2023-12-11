Focusing a text input 

```
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

```
![1](https://github.com/HannaFleming/FocusInput-useRef-React/assets/124400864/35770638-9763-4c40-abb0-ebf8dcfdbba2) 

![1](https://github.com/HannaFleming/FocusInput-useRef-React/assets/124400864/73ac8f38-2b0e-4eb9-a907-38e706e285ea)
