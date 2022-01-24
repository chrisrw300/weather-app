import './App.css';
import Nav from './Components/Nav'
import Forecast from './Components/Forecast';
import Dashboard from './Components/Dashboard'
import Daily from './Components/Daily'

function App() {
  return (
    <div className="App">
      <Nav />
      <Dashboard />
    </div>
  );
}

export default App;
