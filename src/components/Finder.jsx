import React from 'react'
import { useState } from 'react'

function Finder() {

  const [text, setText] = useState('')

  const handleChange = (e)=> {
    setText(e.target.value)
  }


  return (
    <div className='section'> 
        <div className='search_container'>
            <form>
                <input 
                    type="text" 
                    className='search_input'
                    placeholder='Search...'
                    onChange={handleChange}
                    value={text}
                     />
                <button type="submit" className={`search_button`}>Search</button>
            </form>
        </div>
    </div>
  )
}


export default Finder