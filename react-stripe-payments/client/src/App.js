import './App.css';
import StripeContainer from './components/StripeContainer'
import {useState} from 'react'

function App() {
  const [showItem, setShowItem] = useState(false)

  return (
    <div className="App">
      {showItem ? <StripeContainer /> : 
      <>
        <h2>£20.00</h2>
        <button onClick={() => setShowItem(true)}>Proceed to payment</button>
      </>}
    </div>
  );
}

export default App;
