import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <Header title="Movie List" />
      <Movies />
    </div>
  );
}

export default App;
