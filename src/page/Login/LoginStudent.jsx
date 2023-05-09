import React, { useRef } from 'react';
import bgLogin from '../../img/backgoundhoctap.jpg';
import HeaderLogin from '../HeaderLogin/HeaderLogin';
import { Link } from 'react-router-dom';
import HomeScreen from '../Main/HomeScreen';
import logoTruong from '../../img/Logotruong.png';

const LoginStudent = () => {
  const email = useRef();
  const password = useRef();

  const getToken = localStorage.getItem('token');

  const handleSubmit = () => {
    if (
      email.current.value === '123@caothang.edu.vn' &&
      password.current.value == '123456'
    ) {
      const token = 'YOUR_TOKEN_HERE';
      localStorage.setItem('token', token);
    }
  };

  return (
    <>
      {getToken ? (
        <HomeScreen />
      ) : (
        <div className='bg-slate-100  h-screen '>
          <div className='bg-blue-300 h-16 flex justify-around items-center fixed w-full'>
            <div className=' w-48'>
              <img src={logoTruong} alt='' />
            </div>
            <div className='gap-3 flex font-semibold '>
              <Link className='hover:text-red-500 delay-100 ' to='/giang-vien'>
                Giảng viên
              </Link>
              <Link className='hover:text-red-500 delay-100' to='/sinh-vien'>
                Học Sinh
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-center h-full'>
            <div className='flex flex-col max-w-7xl xl:px-5 lg:flex-row'>
              <div className='flex flex-col items-center w-full  lg:pt-1 2xl:pt-2 lg:flex-row'>
                <div className='w-full bg-cover  max-w-md lg:max-w-6xl lg:px-2 lg:w-8/12 2xl:w-8/12 '>
                  <div className='flex flex-col items-center justify-center w-full h-full relative lg:pr-5'>
                    <img className='rounded-xl' src={bgLogin} alt='' />
                  </div>
                </div>
                <div className='w-full relative z-10 max-w-3xl lg:pr-1 lg:mt-0 lg:w-4/12  2xl:w-4/12 lg:pt-2'>
                  <form onSubmit={handleSubmit}>
                    <div className=' flex flex-col items-start justify-start py-10 px-10 bg-white shadow-2xl rounded-xl relative z-10'>
                      <p className='w-full  text-4xl font-medium text-center leading-snug font-sans'>
                        Đăng nhập
                      </p>
                      <div className='w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8'>
                        <div className='relative'>
                          <p className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute'>
                            Email
                          </p>
                          <input
                            ref={email}
                            placeholder='MSSV@caothang.edu.vn'
                            type='text'
                            className='border placeholder-gray-400 focus:outline-none
                  focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
                          />
                        </div>
                        <div className='relative'>
                          <p
                            className='bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute'
                          >
                            Password
                          </p>
                          <input
                            ref={password}
                            placeholder='Password'
                            type='password'
                            className='border placeholder-gray-400 focus:outline-none
                  focus:border-blue-600 w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md'
                          />
                        </div>
                        <div className='relative'>
                          <button
                            className='w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                  rounded-lg transition duration-200 hover:bg-indigo-600 ease'
                          >
                            Đăng nhập
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginStudent;
