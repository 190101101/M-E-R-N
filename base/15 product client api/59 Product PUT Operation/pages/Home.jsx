import {useEffect, useState} from 'react';
import Header from "../components/header/Header";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import CartTotals from "../components/cart/CartTotals";

const Home = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try{
        const response = await fetch('http://localhost:5000/server/category/all');
        const data = await response.json();
        data && setCategory(
          data.map((item) => {
            return {...item, value: item.title}
          })
        );
      }catch(error){
        console.log(error);
      }
    }

    getCategory();
  }, []);

  return (
    <>
      <Header />
      <div className="home px-6 flex md:flex-row justify-between gap-10 flex-col mb:pb-0 pb-24">
        <div className="categories overflow-auto max-h-[calc(100vh_-_112px)] md:pb-10">
          <Categories category={category} setCategory={setCategory}/>
        </div>
        <div className="products flex-[8] overflow-auto max-h-[calc(100vh_-_112px)]">
          <Products category={category} />
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default Home;
