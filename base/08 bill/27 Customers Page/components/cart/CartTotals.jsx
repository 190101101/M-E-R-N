import React from 'react'
import {Button} from 'antd';
import {
  ClearOutlined, 
  PlusCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';

const CartTotals = () => {
  return (
    <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
      <h2 className="bg-blue-600 text-center py-4 text-white font-bold tracking-wide">items in the basket</h2>
    
      <div className="cart-items px-2 flex flex-col gap-y-3 py-2 overflow-y-auto">
        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" className="w-16 h-16 object-cover"/>
            <div className="flex flex-col ml-2">
              <b>apple</b>
              <span>1.2 x 2</span>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <Button 
              className="w-full flex items-center justify-center !rounded-full" 
              type="primary" 
              size="small"
              icon={<PlusCircleOutlined />}/>
            <span className="font-bold">1</span>
            <Button 
              className="w-full flex items-center justify-center !rounded-full" 
              type="primary" 
              size="small"
              icon={<MinusCircleOutlined />}/>
          </div>
        </li>

        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" className="w-16 h-16 object-cover"/>
            <div className="flex flex-col ml-2">
              <b>apple</b>
              <span>1.2 x 2</span>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <Button 
              className="w-full flex items-center justify-center !rounded-full" 
              type="primary" 
              size="small"
              icon={<PlusCircleOutlined />}/>
            <span>1</span>
            <Button 
              className="w-full flex items-center justify-center !rounded-full" 
              type="primary" 
              size="small"
              icon={<MinusCircleOutlined />}/>
          </div>
        </li>

        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" className="w-16 h-16 object-cover"/>
            <div className="flex flex-col ml-2">
              <b>apple</b>
              <span>1.2 x 2</span>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <Button 
              className="w-full flex items-center justify-center !rounded-full" 
              type="primary" 
              size="small"
              icon={<PlusCircleOutlined />}/>
            <span>1</span>
            <Button 
              className="w-full flex items-center justify-center !rounded-full" 
              type="primary" 
              size="small"
              icon={<MinusCircleOutlined />}/>
          </div>
        </li>

        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" className="w-16 h-16 object-cover"/>
            <div className="flex flex-col ml-2">
              <b>apple</b>
              <span>1.2 x 2</span>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <Button 
              className="w-full flex items-center justify-center !rounded-full" 
              type="primary" 
              size="small"
              icon={<PlusCircleOutlined />}/>
            <span>1</span>
            <Button 
              className="w-full flex items-center justify-center !rounded-full" 
              type="primary" 
              size="small"
              icon={<MinusCircleOutlined />}/>
          </div>
        </li>

        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" className="w-16 h-16 object-cover"/>
            <div className="flex flex-col ml-2">
              <b>apple</b>
              <span>1.2 x 2</span>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <Button 
              className="w-full flex items-center justify-center !rounded-full" 
              type="primary" 
              size="small"
              icon={<PlusCircleOutlined />}/>
            <span>1</span>
            <Button 
              className="w-full flex items-center justify-center !rounded-full" 
              type="primary" 
              size="small"
              icon={<MinusCircleOutlined />}/>
          </div>
        </li>

        <li className="cart-item flex justify-between">
          <div className="flex items-center">
            <img src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg" className="w-16 h-16 object-cover"/>
            <div className="flex flex-col ml-2">
              <b>apple</b>
              <span>1.2 x 2</span>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <Button 
              className="w-full flex items-center justify-center !rounded-full" 
              type="primary" 
              size="small"
              icon={<PlusCircleOutlined />}/>
            <span>1</span>
            <Button 
              className="w-full flex items-center justify-center !rounded-full" 
              type="primary" 
              size="small"
              icon={<MinusCircleOutlined />}/>
          </div>
        </li>
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