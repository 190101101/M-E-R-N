import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Bill from './pages/Bill';
import Customer from './pages/Customer';
import Statistic from './pages/Statistic';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/bills" element={<Bill/>}/>
        <Route path="/customers" element={<Customer/>}/>
        <Route path="/statistic" element={<Statistic/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
