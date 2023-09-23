import React from 'react'
import './userresponse.css'
import UserAvatar from '../../Header/profile.svg'

export default function UserResponse() {
  return (
    <li className='chat user-response'>
      <div className="options">
        <p id='option-1'>Steady and abundant.</p>
        <p id='option-2'>Moderately and consistent.</p>
        <p id='option3'>Easily fatigued.</p>
      </div>
      <img src={UserAvatar} className='user-avatar' alt="" />
    </li>
  )
}
