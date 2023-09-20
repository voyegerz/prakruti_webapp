import React from 'react'
import './row.css'
import icon from './icons/bio.png'

export default function Row(props) {
  return (
    <div className='row'>
        <img src={icon} className='icon' alt="" />
        <p className='text'>{props.text}</p>
        <div className='indicator'></div>
    </div>
  )
}
