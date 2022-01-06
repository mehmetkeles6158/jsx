import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React JavaScript Framework
        </a>
        <label className="label" htmlFor="name"> Enter name:</label>
      <input id="name" type="text"/>
      <button style={{ color: 'blue' }}>Submit</button>
      </header>
    </div>
  );
}

export default App;
