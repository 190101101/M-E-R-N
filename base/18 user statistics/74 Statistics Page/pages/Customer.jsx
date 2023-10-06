import {useState, useEffect} from 'react';
import {Table} from 'antd';
import Header from '../components/header/Header';

const Customer = () => {

  const [billItems, setBillItems] = useState([]);

  useEffect(() => {
    const getBills = async () => {
      try{
        const response = await fetch('http://localhost:5000/server/bill/all');
        const data = await response.json();
        setBillItems(data);
      }catch(error){
        console.log(error);        
      }
    }
    getBills();
  }, []);

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
      render:(text) => {
        return <span>{text.substring(0, 10)}</span>
      }
    },
  ];

  return (
    <>
      <Header/>
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center">Customers</h1>
        <Table dataSource={billItems} columns={columns} bordered pagination={true} 
          scroll={{
            x: 1200,
            y: 300
          }}/>
      </div>
    </>  
  )
}

export default Customer