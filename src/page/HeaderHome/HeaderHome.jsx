import React from 'react';
import logoTruong from '../../img/Logotruong.png';
import { MenuOutlined } from '@ant-design/icons';
import iconUser from '../../img/iconUser.svg';
import BtnDrawer from '../../components/BtnDrawer';
import { Dropdown, Space } from 'antd';
const HeaderHome = () => {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  const items = [
    {
      label: <button onClick={handleClick}>Logout</button>,
      key: 1,
    },
  ];
  return (
    <>
      <div className='bg-blue-300 shadow-md h-16  p-5 flex items-center justify-between'>
        <div className='flex items-center'>
          <span className='hover:bg-gray-200 rounded-full h-9 w-9 flex items-center justify-center transition duration-150 ease-in-out cursor-pointer'>
            <MenuOutlined>{/* <BtnDrawer /> */}</MenuOutlined>
          </span>
          <div>
            <img className='h-12 cursor-pointer' src={logoTruong} alt='' />
          </div>
        </div>
        <div>
          <Dropdown
            className='w-24'
            menu={{
              items,
            }}
            trigger={['click']}
            overlayClassName='w-[10rem] z-50 mt-2 bg-white border border-gray-200 rounded-md shadow-md text-center'
          >
            <a
              className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
              onClick={(e) => e.preventDefault()}
            >
              <Space>
                <img className='w-9 h-9' src={iconUser} alt='' />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default HeaderHome;
