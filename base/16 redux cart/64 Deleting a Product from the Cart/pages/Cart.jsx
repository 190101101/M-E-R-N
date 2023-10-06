import {useState} from 'react';
import {Table, Card, Button} from 'antd';
import Header from '../components/header/Header';
import CreateBill from '../components/cart/CreateBill';

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <>
      <Header/>
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center">Cart</h1>
        <Table dataSource={dataSource} columns={columns} bordered pagination={false}/>
      
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