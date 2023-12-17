import React from 'react'
import {useParams} from 'react-router-dom'
export default function User() {
    const {userId}=useParams();
  return (
    <div className='bg-grey-500 text-white-599  '>
      <h3>User:{userId}</h3>
    </div>
  )
}
