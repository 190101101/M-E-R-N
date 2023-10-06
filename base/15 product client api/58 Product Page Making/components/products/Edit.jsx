import {Form, Input, Modal,Table, Button, message} from 'antd';
import { useState, useEffect } from 'react';

const Edit = () => {

  const [form] = Form.useForm();
  const [products, setProducts] = useState([]);

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

  const onFinish = (data) => {
    try{
      fetch('http://localhost:5000/server/products/update',{
        method: 'PUT',
        body: JSON.stringify({...data}),
        headers: {"Content-type":"application/json; charset=UTF-8"}
      });

      message.success("products updated");

      setProducts(products.map((item) => {
        return item;
      }))

    }catch(error){
      console.log(error);
    }
  }

  const deleteProduct = (id) => {
    if(window.confirm('i you sure?')){
      try{
        fetch('http://localhost:5000/server/products/delete', {
          method:'delete',
          body: JSON.stringify({id}),
          headers: {"Content-Type":"application/json; charset=UTF-8"}
        })
        message.success("product deleted");
        setProducts(products.filter((item) => item._id !== id))

      }catch(error){
        console.log(error);
      }
    }
  }

  const columns = [
      {
        title:'name',
        dataIndex:'name',
        width:"2%",
        render:(_, record) => {
            return <p>{record.title}</p>
        }
      },
      {
        title:'image',
        dataIndex:'image',
        width:"2%",
        render:(_, record) => {
          return <img src={record.image} className='w-full h-20 object-cover'/>
      }
      },
      {
        title:'price',
        dataIndex:'price',
        width:"2%",
      },
      {
        title:'category',
        dataIndex:'category',
        width:"2%",
      },
      {
        title: 'Action',
        dataIndex: 'action',
        width:"2%",
        render: (_, record) => {
          return (
            <div>
              <Button type="link" onClick={() => {}} className='pl-0'>update</Button>
              <Button type="link" htmlType="submit" className='text-gray-500'>save</Button>
              <Button type="link" onClick={() => { deleteProduct(record._id) }} danger>delete</Button>
            </div>
          )
        }
      },
    ]

  return (
    <Form onFinish={onFinish} form={form}>
        <Table rowKey={"_id"} bordered dataSource={products} columns={columns} 
        scroll={{
          x: 1000,
          y: 600,
        }}/> 
    </Form>
  )
}

export default Edit