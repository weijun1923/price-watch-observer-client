import React,{useState} from 'react'
import Logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import Line from '../assets/LINE.png';
import AuthServices from "../services/auth.service";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegister = () => {
    AuthServices.register(username, email, password)
      .then(() => {
        window.alert("Registeration succeeds. You are now redirected to the login page");
        navigate("/price-watch-observer-client/login");
      })
      .catch((error) => {
        if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          setMessage(error.response.data);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request);
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  };
  return (
    <div className='register bg-gray-100 w-full text-black pt-5 font-bold lg:flex lg:justify-center lg:items-center lg:flex-col'>
      <div className='flex flex-col justify-center items-center'>
        <img src={Logo} alt="價格觀察網logo" className='w-[50px] lg:w-[80px] lg:my-3' />
        <h1 className='text-2xl lg:text-5xl lg:leading-10 lg:my-3'>註冊會員</h1>
        <h4 className='text-md lg:text-3xl lg:my-3'>或者 <Link to='/price-watch-observer-client/login' className=' text-blue-500 text-md lg:text-3xl'>開始登入</Link></h4>
      </div>
      <div className='flex flex-col justify-center items-center bg-white w-full lg:w-5/12 pt-5 mt-3 shadow-xl lg:p-10 lg:rounded-lg'>
        <div action="" className='flex flex-col w-4/5 md:w-3/5 lg:w-full lg:text-3xl'>
          <label htmlFor="username">使用者名稱 :</label>
          <input type="text" onChange={handleChangeUsername} name='username' className=' border border-gray-400 rounded-md pl-2 py-1 lg:my-3 lg:py-3' />
          <label htmlFor="email">電子信箱 :</label>
          <input type="email" onChange={handleChangeEmail} name='email' className=' border border-gray-400 rounded-md pl-2 py-1 lg:my-3 lg:py-3' />
          {/* <label htmlFor="phone">手機 :</label>
          <input type="tel" name='phone' className=' border border-gray-400 rounded-md pl-2 py-1 lg:my-3  lg:py-3' /> */}
          <label htmlFor="password">密碼 :</label>
          <input type="password" onChange={handleChangePassword} name='password' className=' border border-gray-400 rounded-md pl-2 py-1 lg:my-3  lg:py-3' />
          <button onClick={handleRegister} className=' bg-red-500 text-white rounded-md mt-5 p-1 lg:py-3 hover:bg-red-600'>註冊</button>
          <div className='mt-3'>
            <h4 className='text-center text-gray-400 '>第三方註冊</h4>
          </div>
          <div className='flex justify-between items-center mb-7 mt-3'>
            <button className='border border-gray-400 rounded-md px-5 md:px-10 py-2 lg:px-16 hover:border-gray-500 hover:border-[3px]'><BsFacebook className='w-6 h-6 text-blue-600 lg:w-12 lg:h-12' /></button>
            <button className='border border-gray-400 rounded-md px-5 md:px-10 py-2 lg:px-16 hover:border-gray-500 hover:border-[3px]'><FcGoogle className='w-6 h-6 lg:w-12 lg:h-12' /></button>
            <button className='border border-gray-400 rounded-md px-5 md:px-10 py-2 lg:px-16 hover:border-gray-500 hover:border-[3px]'><img src={Line} alt="" className='w-6 h-6 lg:w-12 lg:h-12' /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register