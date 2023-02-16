import React, { useState } from 'react'
import Logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
// import { FcGoogle } from 'react-icons/fc';
// import { BsFacebook } from 'react-icons/bs';
// import Line from '../assets/LINE.png';
import { useNavigate } from "react-router-dom";
import AuthServices from "../services/auth.service";

function Login(props) {
  let [loading, setLoading] = useState(false);
  let { currentUser, setCurrentUser } = props;
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    setLoading(true);
    if (!email) {
      setMessage("信箱不得為空")
      setLoading(false);
      return
    }
    if (!password) {
      setMessage("密碼不得為空")
      setLoading(false);
      return
    }
    AuthServices.login(email, password).then((response) => {
      console.log(response.data);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      setCurrentUser(AuthServices.getCurrentUser());
      setLoading(false);
      window.alert("登入成功，準備導向到個人頁面");
      navigate("/price-watch-observer-client/Profile");
    }).catch((error) => {
      if (error.response) {
        setMessage(error.response.data);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        setLoading(false);
      } else if (error.request) {
        console.log(error.request);
        setLoading(false);
      } else {
        console.log('Error', error.message);
        setLoading(false);
      }
      console.log(error.config);
      setLoading(false);
    })
  };
  return (
    <div className='login bg-gray-100 w-screen text-black pt-5 font-bold lg:flex lg:justify-center lg:items-center lg:flex-col'>
      <div className='flex flex-col justify-center items-center'>
        <img src={Logo} alt="價格觀察網logo" className='w-[50px] lg:w-[80px] lg:my-3' />
        <h1 className='text-2xl lg:text-5xl lg:leading-10 lg:my-3'>登入會員</h1>
        <h4
          className='text-md lg:text-3xl lg:my-3'>
          或者
          <Link
            to='/price-watch-observer-client/register'
            className=' text-blue-500 text-md lg:text-3xl'>
            現在開始註冊
          </Link>
        </h4>
      </div>
      <div className='flex flex-col justify-center items-center bg-white w-screen lg:w-5/12 pt-5 mt-3 shadow-xl lg:p-10 lg:rounded-lg'>
        <div action="" className='flex flex-col w-4/5 md:w-3/5 lg:w-full lg:text-3xl'>
          <label htmlFor="email">電子信箱 :</label>
          <input type="email" onChange={handleChangeEmail} name='email' className=' border border-gray-400 rounded-md pl-2 py-1 lg:my-3 lg:py-3' />
          {/* <label htmlFor="phone">手機 :</label>
          <input type="tel" name='phone' className=' border border-gray-400 rounded-md pl-2 py-1 lg:my-3  lg:py-3' /> */}
          <label htmlFor="password">密碼 :</label>
          <input type="password" onChange={handleChangePassword} name='password' className=' border border-gray-400 rounded-md pl-2 py-1 lg:my-3  lg:py-3' />
          {message && (
            <div
              className='w-full bg-red-200 mt-5 p-1 rounded-md border border-red-600 lg:p-3 lg:border-[3px] text-center'>
              {message}
            </div>
          )}
          <button
            onClick={handleLogin}
            className=' bg-red-500 text-white rounded-md mt-5 p-1 lg:py-3 hover:bg-red-600 mb-10'>
            {loading && (
              <svg aria-hidden="true" role="status" class="lg:w-10 lg:h-10 inline w-6 h-6 mr-3 text-white animate-spin text-center" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#c7c8c9" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
              </svg>
            )}
            {!loading && (
              "登入"
            )}
          </button>
          {/* <div className='mt-3'>
            <h4 className='text-center text-gray-400 '>第三方登入</h4>
          </div>
          <div className='flex justify-between items-center mb-7 mt-3'>
            <button className='border border-gray-400 rounded-md px-5 md:px-10 py-2 lg:px-16 hover:border-gray-500 hover:border-[3px]'><BsFacebook className='w-6 h-6 text-blue-600 lg:w-12 lg:h-12' /></button>
            <button className='border border-gray-400 rounded-md px-5 md:px-10 py-2 lg:px-16 hover:border-gray-500 hover:border-[3px]'><FcGoogle className='w-6 h-6 lg:w-12 lg:h-12' /></button>
            <button className='border border-gray-400 rounded-md px-5 md:px-10 py-2 lg:px-16 hover:border-gray-500 hover:border-[3px]'><img src={Line} alt="" className='w-6 h-6 lg:w-12 lg:h-12' /></button>
          </div> */}
        </div>
      </div>
      {loading && (
        <div
          className=' bg-black absolute top-0 left-0 w-screen h-screen opacity-40 overflow-hidden'>
        </div>
      )}
    </div>
  )
}

export default Login