import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import { ReactComponent as Logo } from '../assets/logo.svg'
import Logo from "../assets/logoEnglish.svg";
import { FaShoppingCart, FaSearch, FaUser, FaAngleLeft, FaDoorOpen, FaDoorClosed } from "react-icons/fa"; //購物車

function Nav() {
  const [authToggle, setAuthToggle] = useState(false);
  const [navChange, setNavChange] = useState(true);
  const [input, setInput] = useState('');
  const navigate = useNavigate(); //轉址

  const handleSearch = (e) => {
    setInput(e.value);
    navigate('/price-watch-observer-client/search');
    console.log(e.target.value);
  }

  useEffect(() => {
    const handleClick = (event) => {
      if (!event.target.closest('#auth')) {
        setAuthToggle(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    // nav
    <div className='nav flex justify-between items-center shadow-lg p-2 w-screen relative '>
      {navChange && (
        // logo
        <Link to='/price-watch-observer-client/' className='p-0'>
          <img src={Logo} alt="價格觀察網logo" className=' w-32 h-16 lg:w-[200px] lg:h-26 ml-2  ' id='logo'/>
        </Link>
      )}

      {/* searchBar */}
      {!navChange ? <FaAngleLeft size={30} onClick={() => setNavChange(!navChange)} className='mx-2'/> : <FaAngleLeft className='hidden' />}
      <form action="" className={!navChange ? 'flex bg-gray-200 p-2  justify-center items-center rounded-full w-full' : 'hidden lg:flex bg-gray-200 p-2  justify-center items-center rounded-full lg:w-5/12'}>
        <FaSearch className='w-6 h-6 lg:w-10 lg:h-10 lg:ml-5'/>
        <input type="text" className=' bg-inherit  lg:text-3xl text-xl  pl-3 outline-none w-full ' placeholder='搜尋商品' onChange={handleSearch} value={input} />
      </form>
      {navChange && (
        // icons
        <div className='lg:mr-12'>
          <ul className='flex '>
            <li className=' bg-gray-200 p-2 rounded-full mx-1 lg:hidden hover:bg-gray-400' onClick={() => setNavChange(!navChange)}>
              {/* search */}
              <Link>
                <FaSearch className=' w-6 h-6 ' />
              </Link>
            </li>
            <li className=' bg-gray-200 lg:p-3 p-2 rounded-full mx-1 lg:mx-3 hover:bg-gray-400'>
              {/* shopcart */}
              <Link to='/price-watch-observer-client/cart'>
                <FaShoppingCart className=' w-6 h-6 lg:w-10 lg:h-10' />
              </Link>
            </li>
            <li className=' bg-gray-200 lg:p-3 p-2  rounded-full mx-1 mr-5 hover:bg-gray-400 ' onClick={() => setAuthToggle(!authToggle)} id='auth'>
              {/* auth */}
              <FaUser className=' w-6 h-6 lg:h-10 lg:w-10 ' />
              <ul  className={authToggle ? ' z-[1000] absolute right-0 w-2/3 lg:w-2/6 bg-white top-[90px] lg:top-[100px] h-screen  shadow-lg flex flex-col justify-start items-start ease-in-out duration-300' : ' fixed left-[-100%]'}>
                <Link to='/price-watch-observer-client/personal' className='flex justify-start items-center my-5 w-full hover:bg-gray-400 p-2 pl-5 hover:rounded-sm'>
                  <li className=' bg-gray-200 rounded-full p-2 mr-3'>
                    <FaUser className=' w-6 h-6  lg:h-10 lg:w-10' />
                  </li>
                  <span>個人資料</span>
                </Link>
                <Link to='/price-watch-observer-client/login' className='flex justify-start items-center my-5 w-full hover:bg-gray-400 p-2 pl-5 hover:rounded-sm'>
                  <li className=' bg-gray-200 rounded-full p-2 mr-3'>
                    <FaDoorOpen className=' w-6 h-6 lg:w-7 lg:h-7' />
                  </li>
                  <span>登入</span>
                </Link>
                <Link className='flex justify-start items-center my-5 w-full hover:bg-gray-400 p-2 pl-5 hover:rounded-sm'>
                  <li className=' bg-gray-200 rounded-full p-2 mr-3'>
                    <FaDoorClosed className=' w-6 h-6 lg:w-7 lg:h-7' />
                  </li>
                  <span>登出</span>
                </Link>
              </ul>

            </li>
          </ul>
        </div>
      )}
    </div>

  )
}

export default Nav