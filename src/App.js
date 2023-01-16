import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CART from './Components/CART';
import HEADER from './Components/HEADER';
import HOME from './Components/HOME';

function App() {
  return (
    <BrowserRouter>
      <HEADER />
      <div>
        <Routes>
          <Route path='/' exact element={<HOME />} />
          <Route path='/cart' exact element={<CART />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
