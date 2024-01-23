import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pizza Order</h1>
      <form>
          <div>
            <label>
              Name:
              <input type="input" name="name" placeholder="name" />
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="peperoni" />
              Peperoni
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="sausage" />
              Sausage
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="peppers" />
              Peppers
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="onions" />
              Onions
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default App;
