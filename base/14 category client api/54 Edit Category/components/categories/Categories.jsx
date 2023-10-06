import { useState } from 'react';
import { PlusOutlined, EditOutlined } from '@ant-design/icons';
import Add from './Add';
import Edit from './Edit';

const Categories = ({category, setCategory}) => {
    
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <ul className="flex md:flex-col gap-4 text-lg">
          {category.map((item) => 
            <li key={item._id} className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px] flex justify-center items-center">
              <span>{item.title}</span>
            </li>
          )}

          <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px] flex justify-center items-center !bg-purple-800 hover:opacity-90" onClick={() => {setIsAddModalOpen(true)}}>
            <PlusOutlined className="md:text-2xl"/>
          </li>

          <li className="bg-green-700 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all text-center min-w-[145px] flex justify-center items-center !bg-orange-800 hover:opacity-90" onClick={() => {setIsEditModalOpen(true)}}>
            <EditOutlined className="md:text-2xl"/>
          </li>

          <Add 
            isAddModalOpen={isAddModalOpen} 
            setIsAddModalOpen={setIsAddModalOpen}
            category={category}
            setCategory={setCategory}
          />

          <Edit
            isEditModalOpen={isEditModalOpen} 
            setIsEditModalOpen={setIsEditModalOpen}
            category={category}
            setCategory={setCategory}
          />
      </ul>
    </>
  )
}

export default Categories;
