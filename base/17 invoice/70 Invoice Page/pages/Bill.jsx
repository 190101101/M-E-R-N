import {useState, useEffect} from 'react';
import {Table, Button} from 'antd';
import Header from '../components/header/Header';
import PrintBill from '../components/bills/PrintBill';

const Bill = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bills, setBills] = useState(false);

  useEffect(() => {
    const getBills = async () => {
      try{
        const response = await fetch('http://localhost:5000/server/bill/all');
        const data = await response.json();
        setBills(data);
      }catch(error){
        console.log(error);        
      }
    }
    getBills();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: 'customer',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'createdAt',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (text) => {
        return <span>{text.substring(0, 10)}</span>
      }
    },
    {
      title: 'payment',
      dataIndex: 'payment',
      key: 'payment',
    },
    {
      title: 'amount',
      dataIndex: 'amount',
      key: 'amount',
      render:(text) => {
        return <span>{text}$</span>
      }
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render:(text) => {
        return (
          <>
            <Button type="link" className="pl-0" onClick={() => {setIsModalOpen(true)}}>print</Button>
          </>
        )
      }
    },
  ];

  return (
    <>
      <Header/>
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center">Bills</h1>
        <Table dataSource={bills} columns={columns} bordered pagination={true} scroll={{
            x: 1200,
            y: 300,
          }}/>
      </div>

      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>  
  )
}

export default Bill