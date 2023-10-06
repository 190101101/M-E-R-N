import {useState} from 'react';
import {Table, Card, Button, Popconfirm} from 'antd';
import {PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import Header from '../components/header/Header';
import CreateBill from '../components/cart/CreateBill';
import {useSelector, useDispatch} from 'react-redux';
import {deleteCart, increment, decrement } from "../redux/cartSlice";


const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: 'image',
      dataIndex: 'image',
      key: 'image',
      width: '125px',
      render: (text) => {
        return (<img src={text} className="object-cover w-full h-20 "/>)
      }
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
      width: '125px',
    },
    {
      title: 'category',
      dataIndex: 'category',
      key: 'category',
      width: '125px',
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
      width: '125px',
      render: (text) => {
        return (<span>{text.toFixed(2)}$</span>);
      }
    },
    {
      title: 'quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      width: '125px',
      render: (text, record) => {
        return (
           <div className="flex items-center">
              <Button 
                className="w-full flex items-center justify-center !rounded-full" 
                type="primary" 
                size="small"
                icon={<PlusCircleOutlined />} onClick={() => {dispatch(increment(record))}}/>
              <span className="font-bold w-6 inline-bloc k text-center">{record.quantity}</span>
              <Button 
                className="w-full flex items-center justify-center !rounded-full" 
                type="primary" 
                size="small"
                icon={<MinusCircleOutlined />} onClick={() => {
                  if(record.quantity > 1){
                    dispatch(decrement(record))
                  }
                  if(record.quantity === 1){
                    if(window.confirm('i you sure?')){
                      dispatch(decrement(record))
                    }
                  }
                }}/>
            </div>
        );
      }
    },
    {
      title: 'total',
      dataIndex: 'total',
      key: 'total',
      width: '125px',
      render: (text, record) => {
        return (<span>{(record.quantity * record.price).toFixed(2)}$</span>);
      }
    },
    {
      title: 'Action',
      width: '125px',
      render: (_, record) => {
        return (
          <Popconfirm 
            title="delete" 
            okText="yep"
            cancelText="nope"
            onConfirm={() => {
              dispatch(deleteCart(record))
            }}
          >
            <Button type="link" danger>delete</Button>
          </Popconfirm>
        );
      }
    },
  ];

  return (
    <>
      <Header/>
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center">Cart</h1>
        <Table dataSource={cart.cartItems} columns={columns} bordered pagination={false}/>
      
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            <div className="flex flex justify-between">
              <span>sub total</span>
              <span>12.23$</span>
            </div>
            <div className="flex flex justify-between my-2">
              <span>TAX %7</span>
              <span className="text-red-600">12.23$</span>
            </div>
            <div className="flex flex justify-between">
              <b>total</b>
              <b>22.23$</b>
            </div>
            <Button onClick={showModal} className="mt-4 w-full" type="primary" size="large">Order</Button>
          </Card>
        </div> 
      </div>

      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>  
  )
}

export default Cart