import './App.css';
import User from './components/User'

function App() {
  const user = {
    name: "Chris",
    age: 24,
    location: "NSW"
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Christopher's Amazing App</h1>
      </header>
      <User name={user.name} age={user.age} location={user.location}/>
    </div>
  );
}

export default App;
