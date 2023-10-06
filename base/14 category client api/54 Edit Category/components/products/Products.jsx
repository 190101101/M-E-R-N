import React from 'react'

const Products = () => {

  const data = [
    'Apple','Apple','Apple','Apple',
    'Apple','Apple','Apple','Apple',
    'Apple','Apple','Apple','Apple',
    'Apple','Apple','Apple','Apple',
  ];

  return (
    <div className="products-wrapper grid grid-cols-card gap-4" style={{}}>

    {data.map((item) => 
      <div key={Math.random()} className="product-item border hover:shadow-lg cursor-pointer transition-all select-none">
        <div className="product-img">
          <img className="h-28 object-cover w-full border-b" src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"/>
        </div>

        <div className='product-info flex flex-col p-3'>
          <span className="font-bold">{item}</span>
          <span className="">1.2 $</span>
        </div>
      </div>
    )}

    </div>
  )
}

export default Products;