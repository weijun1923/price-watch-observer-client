import React from 'react'
import Logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import Line from '../assets/LINE.png';

function Register() {
  return (
    <div className='register bg-gray-100 w-full text-black pt-5 font-bold lg:flex lg:justify-center lg:items-center lg:flex-col'>
      <div className='flex flex-col justify-center items-center'>
        <img src={Logo} alt="價格觀察網logo" className='w-[50px] lg:w-[80px] lg:my-3' />
        <h1 className='text-2xl lg:text-5xl lg:leading-10 lg:my-3'>註冊會員</h1>
        <h4 className='text-md lg:text-3xl lg:my-3'>或者 <Link to='/price-watch-observer-client/login' className=' text-blue-500 text-md lg:text-3xl'>開始登入</Link></h4>
      </div>
      <div className='flex flex-col justify-center items-center bg-white w-full lg:w-5/12 pt-5 mt-3 shadow-xl lg:p-10 lg:rounded-lg'>
        <form action="" className='flex flex-col w-4/5 md:w-3/5 lg:w-full lg:text-3xl'>
          <label htmlFor="username">使用者名稱 :</label>
          <input type="text" name='username' className=' border border-gray-400 rounded-md pl-2 py-1 lg:my-3 lg:py-3' />
          <label htmlFor="email">電子信箱 :</label>
          <input type="email" name='email' className=' border border-gray-400 rounded-md pl-2 py-1 lg:my-3 lg:py-3' />
          <label htmlFor="phone">手機 :</label>
          <input type="tel" name='phone' className=' border border-gray-400 rounded-md pl-2 py-1 lg:my-3  lg:py-3' />
          <label htmlFor="password">密碼 :</label>
          <input type="password" name='password' className=' border border-gray-400 rounded-md pl-2 py-1 lg:my-3  lg:py-3' />
          <button className=' bg-red-500 text-white rounded-md mt-5 p-1 lg:py-3 hover:bg-red-600'>登入</button>
          <div className='mt-3'>
            <h4 className='text-center text-gray-400 '>第三方註冊</h4>
          </div>
          <div className='flex justify-between items-center mb-7 mt-3'>
            <button className='border border-gray-400 rounded-md px-5 md:px-10 py-2 lg:px-16 hover:border-gray-500 hover:border-[3px]'><BsFacebook className='w-6 h-6 text-blue-600 lg:w-12 lg:h-12' /></button>
            <button className='border border-gray-400 rounded-md px-5 md:px-10 py-2 lg:px-16 hover:border-gray-500 hover:border-[3px]'><FcGoogle className='w-6 h-6 lg:w-12 lg:h-12' /></button>
            <button className='border border-gray-400 rounded-md px-5 md:px-10 py-2 lg:px-16 hover:border-gray-500 hover:border-[3px]'><img src={Line} alt="" className='w-6 h-6 lg:w-12 lg:h-12' /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register