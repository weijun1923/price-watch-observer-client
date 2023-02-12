import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import { ReactComponent as Logo } from '../assets/logo.svg'
import Logo from "../assets/logo.svg";
import { FaShoppingCart, FaSearch, FaUser, FaAngleLeft } from "react-icons/fa"; //購物車

function Nav() {
  const [navChange , setNavChange] = useState(true);
  const [input, setInput] = useState('');
  const navigate = useNavigate(); //轉址
  const handleSearch = (e) => {
    setInput(e.value);
    navigate('/price-watch-observer-client/search');
    console.log(e.target.value);
  }
  return (
    // nav
    <div className=' flex justify-between items-center shadow-lg p-2 w-screen'>
      {navChange && (
        // logo
        <Link to='/price-watch-observer-client/'>
        <img src={Logo} alt="價格觀察網logo" className=' w-16 h-16 lg:w-20 lg:h-20 ml-5 mr-10' />
        </Link>
      )}
      
      {/* searchBar */}
          {!navChange? <FaAngleLeft size={20} onClick={() => setNavChange(!navChange)}/> : <FaAngleLeft className='hidden'/>}
        <form action="" className={ !navChange ? 'flex bg-gray-200 p-2 flex-grow justify-center items-center rounded-full w-full' : 'hidden lg:flex bg-gray-200 p-2 flex-grow justify-center items-center rounded-full w-full'}>
          <FaSearch size={30} />
          <input type="text" className=' flex-grow bg-inherit  text-2xl pl-3 outline-none' placeholder='搜尋商品' onChange={handleSearch} value={input}/>
        </form>
      {navChange && (
        // icons
      <div>
        <ul className='flex'>
          <li className=' bg-gray-200 p-2 rounded-full mx-1 lg:hidden' onClick={() => setNavChange(!navChange)}>
            {/* search */}
            <Link>
              <FaSearch size={30}/>
            </Link>
          </li>
          <li className=' bg-gray-200 p-2 rounded-full mx-1'>
            {/* shopcart */}
            <Link>
              <FaShoppingCart size={30} />
            </Link>
          </li>
          <li className=' bg-gray-200 p-2 rounded-full mx-1 mr-5'>
            {/* auth */}
            <Link>
              <FaUser size={30} />
            </Link>
          </li>
        </ul>
      </div>
      )}
    </div>
  )
}

export default Nav