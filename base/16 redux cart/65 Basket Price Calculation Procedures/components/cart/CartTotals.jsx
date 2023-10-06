import {Button} from 'antd';
import {
  ClearOutlined, 
  PlusCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';

import {useSelector, useDispatch} from 'react-redux';
import { deleteCart } from "../../redux/cartSlice";

const CartTotals = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">items in the basket</h2>
      <div className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
        {cart.cartItems.map((item) => 
          <li className="cart-item flex justify-between" key={item._id}>
            <div className="flex items-center">
              <img src={item.image} onClick={() => dispatch(deleteCart(item))} className="w-16 h-16 object-cover cursor-pointer"/>
              <div className="flex flex-col ml-2">
                <b>{item.title}</b>
                <span>{item.price} x {item.quantity}</span>
              </div>
            </div>

            <div className="flex items-center gap-x-1">
              <Button 
                className="w-full flex items-center justify-center !rounded-full" 
                type="primary" 
                size="small"
                icon={<PlusCircleOutlined />}/>
              <span className="font-bold">{item.quantity}</span>
              <Button 
                className="w-full flex items-center justify-center !rounded-full" 
                type="primary" 
                size="small"
                icon={<MinusCircleOutlined />}/>
            </div>
          </li>
        )}
      </div>

      <div className='cart-totals mt-auto'>
        <div className='border-t border-b'>
          <div className='flex justify-between p-2'>
            <b>subtotal</b>
            <span>{cart.total > 0 ? cart.total.toFixed(2) : 0}$</span>
          </div>
          <div className='flex justify-between p-2'>
            <b>TAX %B</b>
            <span className="text-red-700"> 
              {
                (cart.total * cart.tax) / 100 > 0 ? 
                `+${((cart.total * cart.tax) / 100).toFixed(2)}` : 0
              }  
            $</span>
          </div>
        </div>

        <div className='border-b mt-4'>
          <div className='flex justify-between p-2'>
            <b className="text-xl text-lg text-green-500">total</b>
            <span className="text-xl">{cart.total > 0 ? (cart.total + (cart.total * cart.tax) / 100).toFixed(2) : 0}$</span>
          </div>
        </div>

        <div className='py-4 px-2'>
          <Button className="w-full" type="primary" site="large">create order</Button>
          <Button className="w-full mt-1 flex items-center justify-center" type="primary" danger site="large"
          icon={<ClearOutlined />}>clear</Button>
        </div>

      </div>
    </div>
  )
}

export default CartTotals;