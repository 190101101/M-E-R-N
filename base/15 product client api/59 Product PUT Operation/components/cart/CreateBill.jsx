import {Form, Input, Modal, Select, Card, Button} from 'antd';

const CreateBill = ({isModalOpen, setIsModalOpen}) => {

  const onFinish = (values) => {
    console.log(values);
  }

  return (
    <>
      <Modal 
        title="new order" 
        open={isModalOpen} 
        onCancel={() => {setIsModalOpen(false)}} 
        footer={false}>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item 
            name="username" 
            label="user name" 
            rules={[{required:true, message: "username is required"}]}>
            <Input placeholder="placeholder"/>
          </Form.Item>

          <Form.Item 
            name="phone" 
            label="phone number" 
            rules={[{required:true, message: "phone is required"}]}>
            <Input placeholder="placeholder" maxLength={11}/>
          </Form.Item>

          <Form.Item 
            name="payment" 
            label="payment" 
            rules={[{required:true, message: "payment is required"}]}>
            <Select placeholder="Select a option">
              <Select.Option value="cash">cash</Select.Option>
              <Select.Option value="card">debit card</Select.Option>
            </Select>
          </Form.Item>

            <Card className="w-full">
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
              <div className="flex justify-end">
                <Button 
                  onClick={() => setIsModalOpen(true)} 
                  className="mt-4" 
                  type="primary" 
                  size="middle" 
                  htmlType="submit"
                >Order</Button>
              </div>
            </Card>

        </Form>

      </Modal>
    </>
  )
}

export default CreateBill;