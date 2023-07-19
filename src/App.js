import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Packages from './Pages/Packages/Packages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/package' element={<Packages />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
