import React from 'react'
import { Input, Badge } from 'antd';
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
        <div className="header-search flex-1 flex justify-center">
          <Input 
            size="large" 
            placeholder="search" 
            prefix={<SearchOutlined />} 
            className="rounded-full max-w-[800px]"
          />
        <br />
        </div>
        <div className="menu-links flex justify-between items-center gap-7 md:static fixed bottom-0 md:w-auto w-screen md:bg-transparent bg-white left-0 md:border-t-0 border-t md:px-0 px-4 py-1">
          <a className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
              <HomeOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">Home</span>
          </a>
          <Badge count={3} offset={[0,-1]} className="md:flex hidden">
            <a className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                <ShoppingCartOutlined className="md:text-2xl"/>
                <span className="md:text-xs text-[10px]">Cart</span>
            </a>
          </Badge>
          <a className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
              <CopyOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">Invoice</span>
          </a>
          <a className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
              <UserOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">Users</span>
          </a>
          <a className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
              <BarChartOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">Stats</span>
          </a>
          <a className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
              <LogoutOutlined className="md:text-2xl"/>
              <span className="md:text-xs text-[10px]">log out</span>
          </a>
        </div>
        <Badge count={3} offset={[0,-1]} className="md:hidden flex">
            <a className="menu-link flex flex-col hover:text-[#40a9ff] transition-all">
                <ShoppingCartOutlined className="text-2xl"/>
                <span className="md:text-xs text-[10px]">Cart</span>
            </a>
          </Badge>
      </header>
    </div>
  )
}

export default Header;