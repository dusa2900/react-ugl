import logo from './logo.svg';
import './App.css';
// import First from './components/First';
// import Second from './components/Second';
// import { Third } from './components/Third';
import Head from './components/Head';

function App() {
const cts=[
  {
    id:1,
    name:"ganesh",
    email:"ganesh@gmail.com"
  },
  {
    id:2,
    name:"ganesh kumar",
    email:"ganesh.kumar@gmail.com"
  }
]

  return (
    <div className="App">

      <header className="App-header">
      <Head/>
      {/* <First contacts={cts}/>
      <br></br>
      <Second />
      <Third name="Dusa Goutham"/> */}
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
