import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import { ReactComponent as Logo } from '../assets/logo.svg'
import Logo from "../assets/logo.svg";
import { FaShoppingCart, FaSearch, FaUser, FaAngleLeft, FaDoorOpen, FaDoorClosed } from "react-icons/fa"; //購物車

function Nav() {
  const [navChange, setNavChange] = useState(true);
  const [input, setInput] = useState('');
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate(); //轉址
  const handleSearch = (e) => {
    setInput(e.value);
    navigate('/price-watch-observer-client/search');
    console.log(e.target.value);
  }

  const handleToggle = (e) => {
    e.stopPropagation();
    setToggle(!toggle);
  }
  return (
    // nav
    <div className='nav flex justify-between items-center shadow-lg p-2 w-screen relative'>
      {navChange && (
        // logo
        <Link to='/price-watch-observer-client/'>
          <img src={Logo} alt="價格觀察網logo" className=' w-16 h-16 lg:w-20 lg:h-20 ml-5 mr-10' />
        </Link>
      )}

      {/* searchBar */}
      {!navChange ? <FaAngleLeft size={30} onClick={() => setNavChange(!navChange)} /> : <FaAngleLeft className='hidden' />}
      <form action="" className={!navChange ? 'flex bg-gray-200 p-2  justify-center items-center rounded-full w-full' : 'hidden lg:flex bg-gray-200 p-2 flex-grow justify-center items-center rounded-full w-full'}>
        <FaSearch size={30} />
        <input type="text" className=' bg-inherit  text-2xl pl-3 outline-none w-full' placeholder='搜尋商品' onChange={handleSearch} value={input} />
      </form>
      {navChange && (
        // icons
        <div className=''>
          <ul className='flex '>
            <li className=' bg-gray-200 p-2 rounded-full mx-1 lg:hidden hover:bg-gray-400' onClick={() => setNavChange(!navChange)}>
              {/* search */}
              <Link>
                <FaSearch size={30} />
              </Link>
            </li>
            <li className=' bg-gray-200 p-2 rounded-full mx-1 hover:bg-gray-400'>
              {/* shopcart */}
              <Link to='/price-watch-observer-client/cart'>
                <FaShoppingCart size={30} />
              </Link>
            </li>
            <li className=' bg-gray-200 p-2 rounded-full mx-1 mr-5 hover:bg-gray-400 '>
              {/* auth */}
              <FaUser size={30} onClick={handleToggle}/>
              {toggle && (
                <ul className=' z-[1000] absolute right-0 w-1/2 bg-white top-[80px] h-screen border-l border-gray-400 flex flex-col justify-start items-start '>
                  <Link to='/price-watch-observer-client/personal' className='flex justify-start items-center my-5 w-full hover:bg-gray-400 p-2 pl-5 hover:rounded-md'>
                    <li className=' bg-gray-200 rounded-full p-2 mr-3'>
                      <FaUser className=' w-6 h-6  lg:w-10 lg:h-10' />
                    </li>
                    <span>個人資料</span>
                  </Link>
                  <Link to='/price-watch-observer-client/login' className='flex justify-start items-center my-5 w-full hover:bg-gray-400 p-2 pl-5 hover:rounded-md'>
                    <li className=' bg-gray-200 rounded-full p-2 mr-3'>
                      <FaDoorOpen className=' w-6 h-6 lg:w-10 lg:h-10' />
                    </li>
                    <span>登入</span>
                  </Link>
                  <Link className='flex justify-start items-center my-5 w-full hover:bg-gray-400 p-2 pl-5 hover:rounded-md'>
                    <li className=' bg-gray-200 rounded-full p-2 mr-3'>
                      <FaDoorClosed className=' w-6 h-6 lg:w-10 lg:h-10' />
                    </li>
                    <span>登出</span>
                  </Link>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Nav