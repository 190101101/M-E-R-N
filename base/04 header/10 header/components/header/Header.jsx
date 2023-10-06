import React from 'react'
import { Input } from 'antd';
import { 
  SearchOutlined, 
  HomeOutlined, 
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const Header = () => {
  return (
    <div className="border-b mb-6">
      <header className="py-4 px-6 flex justify-between item-center gap-10">
        <div>
          <a href="/">
            <h2 className="text-2xl font-bold md-text-4xl">LOGO</h2>
          </a>
        </div>
        <div className="header-search flex-1">
          <Input 
            size="large" 
            placeholder="search" 
            prefix={<SearchOutlined />} 
            className="rounded-full max-w-[800px]"
          />
        <br />
        </div>
        <div className="menu-links flex justify-between items-center gap-8">
          <a className="menu-link flex flex-col">
              <HomeOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">Home</span>
          </a>
          <a className="menu-link flex flex-col">
              <ShoppingCartOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">Cart</span>
          </a>
          <a className="menu-link flex flex-col">
              <CopyOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">Invoice</span>
          </a>
          <a className="menu-link flex flex-col">
              <UserOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">Users</span>
          </a>
          <a className="menu-link flex flex-col">
              <BarChartOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">Stats</span>
          </a>
          <a className="menu-link flex flex-col">
              <LogoutOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">log out</span>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Header;