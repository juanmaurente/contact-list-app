import React from 'react'
import Card from './Card'


function ContactList(props) {
        return (
            <div className="section container">
                     
                    <div className='grid_container'>
                        {props.contacts.map((contact)=>(
                           <Card 
                            key={contact.id} 
                            user={contact} />
                        ))}
                    </div>
                
                
            </div>
          )
}

export default ContactList