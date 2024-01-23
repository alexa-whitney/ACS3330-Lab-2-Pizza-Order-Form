import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("")
  const [pepperoni, setPepperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [peppers, setPeppers] = useState(false)
  const [onions, setOnions] = useState(false)

  return (
    <div className="App">
      <h1>Pizza Order</h1>
      <div className="form-container">
        <form>
          <div>
            <label>
              Name:
              <input
                type="input"
                name="name"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="pepperoni"
                checked={pepperoni}
                onChange={() => setPepperoni(!pepperoni)}
              />
              Pepperoni
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="sausage"
                checked={sausage}
                onChange={() => setSausage(!sausage)}
              />
              Sausage
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="peppers"
                checked={peppers}
                onChange={() => setPeppers(!peppers)}
              />
              Peppers
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="onions"
                checked={onions}
                onChange={() => setOnions(!onions)}
              />
              Onions
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="summary">
        <h2>Your Order</h2>
        <div><b>Name:</b> {name}</div>
        {pepperoni && <div>Pepperoni</div>}
        {sausage && <div>Sausage</div>}
        {peppers && <div>Peppers</div>}
        {onions && <div>Onions</div>}
      </div>
    </div>
  );
}

export default App;
