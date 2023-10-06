import {Form, Input, Modal, Select, Card, Button} from 'antd';

const PrintBill = ({isModalOpen, setIsModalOpen}) => {

  const onFinish = (values) => {
    console.log(values);
  }

  return (
    <>
      <Modal 
        title="Print Bill" 
        open={isModalOpen} 
        onCancel={() => {setIsModalOpen(false)}} 
        footer={false}>

          bills

      </Modal>
    </>
  )
}

export default PrintBill;