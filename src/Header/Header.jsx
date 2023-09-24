import React from 'react'
import './header.css'
import Search from './Search/Search'
import ProfileIcon from './profile.svg'
import ProgressBar from './ProgressBar/ProgressBar';

export default function Header() {
  return (
    <div id='header'>
        <div id='h1'>
            <p id="page-title">Assessment</p>
            <Search/>
            <img src={ProfileIcon} alt="Profile" id="profile-icon" />
        </div>
        {/* <p id='username' >Hi, Voyagers</p> */}
        <ProgressBar />
    </div>
  )
}
