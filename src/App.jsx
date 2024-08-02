import { useState } from 'react'
import './App.css'
import FormAddMoney from './Components/FormAddMoney'
import Header from './Components/Header'
import MainControl from './Components/MainControl';

function App() {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const component = isValid? 
  < MainControl count={count} setCount={setCount} /> 
  : < FormAddMoney setCount={setCount} setIsValid={setIsValid}/>;

  return (
    <div className="App">
      < Header />
      { component }
    </div>
  )
}

export default App
