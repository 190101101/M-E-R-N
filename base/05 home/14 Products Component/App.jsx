import React from 'react';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';

const App = () => {
  return (
    <>
      <Header/>
      <div className="home px-6 flex justify-between gap-10">
        <div className="categories flex-1 overflow-auto max-h-[calc(100vh-_-112px)] pb-56">
          <Categories/>
        </div>
        <div className="products flex-[8]">
          <div>
            <Products/>
          </div>
        </div>
        <div className="">
          <div>cart totals</div>
        </div>
      </div>
    </>
  );
}

export default App;
