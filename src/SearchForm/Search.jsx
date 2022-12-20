import React from 'react';
import {FiSearch} from 'react-icons/fi';
import "./Search.css"

const Search = () => {
  return (
    <div className='search'>
       <form action="">
        <div className='search-form'>
            <input type="text" placeholder='Search'/>
            <button className='search-btn'>
            <FiSearch />
            </button>
        </div>
       </form>
    </div>
  )
}

export default Search