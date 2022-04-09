import React from 'react'

function Card({ contact }) {
  return (
    <div className='contact_card'>
        <div className="contact_data">
          <h4>{contact.name}</h4>
          <p>{contact.phone}</p>

        </div>
        
    </div>
  )
}

export default Card