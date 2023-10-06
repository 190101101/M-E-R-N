import {Link} from 'react-router-dom';
import { Form, Input, Button } from "antd"

const Register = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-between h-full">
        <div className="xl:px-20 px-10 flex flex-col justify-center h-full w-full relative">
          <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
          <Form layout="vertical">
            <Form.Item 
              label="user name" 
              name="username" 
              rules={[{required:true, message:'username is required'}]}>
              <Input/>
            </Form.Item>
            <Form.Item 
              label="email" 
              name="email" 
              rules={[{required:true, message:'email is required'}]}>
              <Input/>
            </Form.Item>
            <Form.Item 
              label="password" 
              name="password" 
              rules={[{required:true, message:'password is required'}]}>
              <Input.Password/>
            </Form.Item>
            <Form.Item 
              label="confirm password" 
              name="confirmpassword" 
              rules={[{required:true, message:'confirm password is required'}]}>
              <Input.Password/>
            </Form.Item>
            
            <Form.Item>
              <Button htmlType="submit" type="primary" className="w-full" size="large" >Registration</Button>
            </Form.Item>
          </Form>
          <div className='flex justify-center absolute left-0 bottom-10 w-full'>
            <span>do you have an account?</span>
            &nbsp;
            <Link to="/login" className='text-blue-600'>log in</Link>
          </div>
        </div>
        <div className="xl:w-4/6 min-w-[800px]">right</div>
      </div>
    </div>
  )
}

export default Register