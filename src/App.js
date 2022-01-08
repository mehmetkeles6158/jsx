import logo from './logo.svg';
import './App.css';

// function getButtonText() {
//   return 'Click On Me!'
// }
function App() {
  const buttonText = {text: "Click on me!"};
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
      <button style={{ color: 'blue' }}>{buttonText.text}</button>
      </header>
    </div>
  );
}

export default App;
