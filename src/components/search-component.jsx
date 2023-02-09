import React from 'react'
import { Link } from 'react-router-dom';
// icons 
import { BsSearch } from 'react-icons/bs'; //放大鏡
import { MdArrowBackIosNew } from 'react-icons/md';//左箭頭

function SearchComponent(props) {
    let { navOpen , setNavOpen } = props;
    return (
        <div className='search_component'>
            <nav className='nav_search container-fluid'>
                <form action="" className='search col-12 d-flex justify-content-center align-items-md-center'>
                    <Link className='go_back' to='/price-watch-observer-client/' onClick={() => setNavOpen(!navOpen)}>
                        <MdArrowBackIosNew className='go_back__icon' />
                    </Link>
                    <input type="search" className='flex-grow-1' placeholder='搜尋'/>
                    <button><BsSearch /></button>
                </form>
            </nav>
        </div>
    )
}

export default SearchComponent