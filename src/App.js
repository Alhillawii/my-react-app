import logo from './logo.svg';
import './App.css';
// import { IconName } from "react-icons/im"
import { Im500Px } from "react-icons/im";
import { ImAngry } from "react-icons/im";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Im500Px />
        <br></br>
        <ImAngry />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
