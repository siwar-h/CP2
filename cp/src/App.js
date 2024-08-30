import logo from './logo.svg';
import './App.css';
import PlayersListe from './PlayersListe';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='container-md'>
        <NavBar/>
      <h1>Top Football Players </h1>
        <PlayersListe/>
      </div>
      </header>
     
    </div>
  );
}

export default App;
