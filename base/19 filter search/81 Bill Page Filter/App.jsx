import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Bill from './pages/Bill';
import Customer from './pages/Customer';
import Statistic from './pages/Statistic';
import Products from './pages/Products';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <RouterControl>
            <Home/>
          </RouterControl>}
        />
        <Route path="/cart" element={
          <RouterControl>
            <Cart/>
          </RouterControl>
        }/>
        <Route path="/bills" element={
          <RouterControl>
            <Bill/>
          </RouterControl>
        }/>
        <Route path="/customers" element={
          <RouterControl>
            <Customer/>
          </RouterControl>
        }/>
        <Route path="/statistic" element={
          <RouterControl>
            <Statistic/>
          </RouterControl>
        }/>
        <Route path="/products" element={
          <RouterControl>
            <Products/>
          </RouterControl>
        }/>
        <Route path="/register" element={
            <Register/>
        }/>
        <Route path="/login" element={
            <Login/>
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


export const RouterControl = ({children}) => {
  if(localStorage.getItem('user')){
    return children;
  }else{
    return <Navigate to="/login"/>
  }
}