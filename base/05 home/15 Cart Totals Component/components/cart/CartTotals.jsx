import React from 'react'
import {Button} from 'antd';
import {ClearOutlined} from '@ant-design/icons';

const CartTotals = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">items in the basket</h2>
    
      <div className="cart-items">
        <div className="cart-item">cart item</div>
      </div>

      <div className='cart-totals mt-auto'>
        <div className='border-t border-b'>
          <div className='flex justify-between p-2'>
            <b>total</b>
            <span>1.2$</span>
          </div>
          <div className='flex justify-between p-2'>
            <b>VAT %7</b>
            <span className="text-red-700">1.2$</span>
          </div>
        </div>

        <div className='border-b mt-4'>
          <div className='flex justify-between p-2'>
            <b className="text-xl text-lg text-green-500">total</b>
            <span className="text-xl">1.2$</span>
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