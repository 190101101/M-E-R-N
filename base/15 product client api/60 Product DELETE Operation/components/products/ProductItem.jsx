
const ProductItem = ({products}) => {
  return (
    <>
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
    </>
  )
}

export default ProductItem