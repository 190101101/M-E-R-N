import { useState } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Categories = ({category, setCategory}) => {
    
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (data) => {
    try{
      fetch('http://localhost:5000/server/category/create',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-type":"application/json; charset=UTF-8"}
      });

      message.success("category added");
      form.resetFields();
      setCategory([...category, data])

    }catch(error){
      console.log(error);
    }
  }
  
  return (
    <>
      <ul className="flex md:flex-col gap-4 text-lg">
          {category.map((item) => 
            <li key={item._id} className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px] flex justify-center items-center">
              <span>{item.title}</span>
            </li>
          )}
          <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px] flex justify-center items-center !bg-purple-800 hover:opacity-90" onClick={showModal}>
            <PlusOutlined className="md:text-2xl"/>
          </li>
      </ul>

      <>
        <Modal title="new category" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false}>
          <Form layout='vertical' onFinish={onFinish} form={form}>
            <Form.Item name="title" label="title" 
              rules={[{required: true, message:'title is required'}]}>
              <Input/>
            </Form.Item>

            <Form.Item className="flex justify-end mb-0">
              <Button htmlType="submit" type="primary">add</Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    </>
  )
}

export default Categories;
