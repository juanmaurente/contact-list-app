import React from 'react'
import {useEffect, useState} from 'react'
import Card from './Card'


function ContactList() {
    const [users,setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}`)
        const data = await res.json()
        setUsers(data)
        setLoading(false)
        
    }

    if(!loading){
        return (
            <div className="section container">
                     
                    <div className='grid_container'>
                        {users.map((user)=>(
                           <Card key={user.id} user={user} />
                        ))}
                    </div>
                
                
            </div>
          )
    } else {
        return <h3>Loading...</h3>
    }
  
}

export default ContactList