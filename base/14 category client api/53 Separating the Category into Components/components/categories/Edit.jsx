import {Form, Modal, input, Button, Table} from 'antd';

const Edit = ({isEditModalOpen, setIsEditModalOpen}) => {
  return (
    <Modal 
      open={isEditModalOpen} 
      onCancel={() => {setIsEditModalOpen(false)}} 
      footer={false}
      title="category"
      >
        <Form>
            <Table bordered/> 
        </Form>
    </Modal>
  )
}

export default Edit