import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// image
import { ReactComponent as Logo } from '../assets/logo.svg';
// icons
import { BsSearch } from 'react-icons/bs';//放大鏡
import { SlMenu } from 'react-icons/sl';//漢堡選單開
import { CgMenuMotion } from 'react-icons/cg';//漢堡選單關
import { BsFillCartFill } from 'react-icons/bs'//購物車
import { BsFillPersonFill } from 'react-icons/bs'//頭像
function NavComponent() {
    // 定義 toggle 用來追蹤選單的顯示/隱藏狀態
    const [open , setOpen] = useState(false);
    // 在文件外點擊時關閉選單
    const handleClickOutsite = (e) => {
        // 註冊一個 全域 "click" 事件監聽器
        document.addEventListener("click" , (e) => {
            // 判斷事件目標是否在選單組件內，若是則不做任何操作
            if(e.target.closest(".toggle__menu")) return;
            // 否則關閉選單
            setOpen(false);
        })
    }
    // 點擊帳號開關選單
    const handleToggle = (e) => {
        // 停止冒泡
        e.stopPropagation();
        // 點擊時開關選單
        setOpen(!open);
        // 如果點擊選單外，可直接關閉選單
        handleClickOutsite();
    }

    return (
        <div className="nav_component">
            <nav className='nav_top container-fluid d-flex align-items-center justify-content-between'>
                {/* logo */}
                <Link className='logo'><Logo className='logo__svg' /></Link>

                {/* icons */}
                <ul className='nav_top_list d-flex'>
                    <li className='nav_top_list__item'>
                        <BsFillCartFill className='nav_top_list__item__icon' />
                    </li>

                    <li className='nav_top_list__item toggle'>
                        <BsFillPersonFill className='nav_top_list__item__icon'onClick={handleToggle} />
                        
                        {/*toggle menu */}
                        {open && (
                        <ul className='toggle__menu d-flex flex-column'>
                            <li className='toggle__menu__item'>
                                <Link className='toggle__menu__item__link toggle__menu__item__link--active'>
                                    個人頁面
                                </Link>
                            </li>
                            <li className='toggle__menu__item'>
                                <Link className='toggle__menu__item__link'>
                                    登入
                                </Link>
                            </li>
                            <li className='toggle__menu__item'>
                                <Link className='toggle__menu__item__link'>
                                    登出
                                </Link>
                            </li>
                        </ul>
                        )}
                    </li>
                </ul>
            {/*nav bottom  */}
            </nav>
            <nav className='nav_bottom container-fluid'>
                <form action="" className='search col-12 d-flex'>
                    <input type="search"  className='flex-grow-1'/>
                    <button><BsSearch /></button>
                </form>
            </nav>
        </div>
    )
}

export default NavComponent