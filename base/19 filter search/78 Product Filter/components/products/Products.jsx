import {useNavigate} from 'react-router-dom';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import Add from './Add';

const Products = ({category, filtered, products, setProducts}) => {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const navigate = useNavigate();

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

      {filtered.map((item) => 
        <ProductItem key={item._id} item={item}/>
      )}

      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-purple-800 flex justify-center items-center hover:opacity-90 min-h[180px]" onClick={() => {setIsAddModalOpen(true)}}>
        <PlusOutlined className="md:text-2xl text-white"/>
      </div>

      <div className="product-item border hover:shadow-lg cursor-pointer transition-all select-none bg-orange-800 flex justify-center items-center hover:opacity-90 min-h[180px]" onClick={() => {navigate("/products")}}>
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