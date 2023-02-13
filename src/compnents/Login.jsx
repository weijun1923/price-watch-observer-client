import React from 'react'
import Logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import Line from '../assets/LINE.png';

function Login() {
  return (
    <div className='register bg-gray-100 w-full text-black pt-5 font-bold '>
      <div className='flex flex-col justify-center items-center'>
        <img src={Logo} alt="價格觀察網logo" className='w-[50px]' />
        <h1 className='text-2xl'>登入會員</h1>
        <h4 className='text-md'>或者 <Link to='/price-watch-observer-client/register' className=' text-blue-500 text-md'>現在開始註冊</Link></h4>
      </div>
      <div className='flex flex-col justify-center items-center bg-white w-full pt-5 mt-3 shadow-xl'>
        <form action="" className='flex flex-col w-4/5'>
          <label htmlFor="email">電子信箱 :</label>
          <input type="email" name='email'  className=' border border-gray-400 rounded-md pl-2' />
          <label htmlFor="phone">手機 :</label>
          <input type="tel" name='phone' className=' border border-gray-400 rounded-md pl-2' />
          <label htmlFor="password">密碼 :</label>
          <input type="password" name='password' className=' border border-gray-400 rounded-md pl-2' />
          <button className=' bg-red-500 text-white rounded-md mt-5 p-1'>登入</button>
          <h4 className='text-center text-gray-400 mt-3 before:content-[""] border-b border-gray-400 '>第三方登入</h4>
          <div className='flex justify-between items-center mb-7 mt-3'>
            <button className='border border-gray-400 rounded-md px-8 py-2'><BsFacebook className='w-6 h-6 text-blue-600'/></button>
            <button className='border border-gray-400 rounded-md px-8 py-2'><FcGoogle className='w-6 h-6'/></button>
            <button className='border border-gray-400 rounded-md px-8 py-2'><img src={Line} alt="" className='w-6 h-6' /></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login