import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SideNav from './components/SideNav';
import Home from './pages/Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} /> 
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
