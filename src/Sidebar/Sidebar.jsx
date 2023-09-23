import React from 'react'
import Row from './Row/Row'
import './sidebar.css'
import logo from './logo-prakruti.png'

export default function Sidebar() {
  return (
    <div id='sidebar'>
        <div id='logo-container'>
            <img src={logo} alt="Logo" />
            <p>Prakruti</p>
        </div>
        <div className='lr lr-1'></div>
        <Row text={"Assessment"}/>
        <Row text={"Ask"}/>
        <div className='lr lr-2'></div>
        <Row text={"Settings"}/>
        <Row text={"Account"}/>
        <div id='team-name'>
            <p>Made with <span id='H'>❤</span> by Team<br></br>
                    VedicVoyagers
            </p>
            <div id='line-with-diamonds'>
                <div id='diamond-1'></div>
                <div id='line'></div>
                <div id='diamond-2'></div>
            </div>
        </div>
    </div>
  )
}
