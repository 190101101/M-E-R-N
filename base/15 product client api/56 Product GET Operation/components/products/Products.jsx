import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async() => {
      try{
        const response = await fetch('http://localhost:5000/server/product/all')
        const data = await response.json();
        setProducts(data);

      }catch(error){
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <div className="products-wrapper grid grid-cols-card gap-4" style={{}}>

    {products.map((item) => 
      <div key={Math.random()} className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
        <div className="product-img">
          <img className="h-28 object-cover w-full border-b" src={item.image}/>
        </div>

        <div className='product-info flex flex-col p-3'>
          <span className="font-bold">{item.title}</span>
          <span>{item.price} $</span>
        </div>
      </div>
    )}

      <div key={Math.random()} className="product-item border hover:shadow-lg cursor-pointer transition-all select-none" onClick={() => {}}>
        <PlusOutlined className="md:text-2xl"/>
      </div>

      <div key={Math.random()} className="product-item border hover:shadow-lg cursor-pointer transition-all select-none" onClick={() => {}}>
        <EditOutlined className="md:text-2xl"/>
      </div>

    </div>
  )
}

export default Products;