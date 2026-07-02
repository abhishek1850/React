import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (

    <div className='bg-gray-700 text-white text-4xl flex p-4 justify-center m-4 '>
        User: {userId}</div>
  )
}

export default User