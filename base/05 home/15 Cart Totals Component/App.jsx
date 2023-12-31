import React from 'react';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';
import CartTotals from './components/cart/CartTotals';

const App = () => {
  return (
    <>
      <Header/>
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories overflow-auto max-h-[calc(100vh-_-112px)] pb-56">
          <Categories/>
        </div>
        <div className="products flex-[8]">
          <Products/>
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals/>
        </div>
      </div>
    </>
  );
}

export default App;
