import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import Add from './Add';

const Products = ({category}) => {

  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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

      <ProductItem products={products}/>

      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-purple-800 flex justify-center items-center hover:opacity-90" onClick={() => {setIsAddModalOpen(true)}}>
        <PlusOutlined className="md:text-2xl text-white"/>
      </div>

      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-orange-800 flex justify-center items-center hover:opacity-90">
        <EditOutlined className="md:text-2xl text-white"/>
      </div>

  
      <Add 
        isAddModalOpen={isAddModalOpen} 
        setIsAddModalOpen={setIsAddModalOpen}
        products={products}
        setProducts={setProducts}
        category={category}
      />

    </div>
  )
}

export default Products;