import React from 'react'

function Finder(props) {

  const handleChange = (e)=> {
    props.searchKeyword(e.target.value)
  }

  return (
    <div className='section'> 
        <div className='search_container'>
            <form>
                <input 
                    type="text" 
                    className='search_input'
                    placeholder='Search...'
                    onChange={ handleChange }
                    value= {props.text}
                     />
                <button type="submit" className={`clear_button`}>Clear</button>
            </form>
        </div>
    </div>
  )
}


export default Finder