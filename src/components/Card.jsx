import React from 'react'

function Card({ user }) {
  return (
    <div className='contact_card'>
        <h2 className='contact_name'>{user.name}</h2>
        <div className='contact_info'>
            <p className='contact_data'> {user.email}</p>
            <p className='contact_data'> {user.address.city}</p>
            <h3 className='contact_phone'>{user.phone}</h3>
        </div>
    </div>
  )
}

export default Card