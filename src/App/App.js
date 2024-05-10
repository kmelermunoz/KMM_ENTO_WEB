import './App.css';
import Test from '../Test/test.js';
import Presentacio from '../Presentacio/presentacio.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test/>
        <Presentacio/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
