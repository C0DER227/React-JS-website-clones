import './styles/App.css';
import './styles/Home.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
