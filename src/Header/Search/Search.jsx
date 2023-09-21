import React from 'react'
import './search.css'
import searchicon from './search.png'

export default function Search() {
  return (
    <div className='search' id='search' > 
        <img id='search-icon' src={searchicon} alt="" />
        <input id='text-box' type="text" placeholder='Search'/>
        <div id="filter">
            <div className="l1 line"></div>
            <div className=" l2 line"></div>
        </div>
    </div>
  )
}
