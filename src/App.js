import logo from './logo.svg';
import './App.css';
import TodoApp from './main.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> test again. test
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
      <TodoApp/>
    </div>
  );
}

export default App;
