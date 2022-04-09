import { useState, useEffect } from 'react';
import Header from './components/Header.jsx'
import Finder from './components/Finder.jsx'
import ContactList from './components/ContactList.jsx';


function App() {
  const [searchText , setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [contacts ,setContacts] = useState([])

  useEffect(()=>{
    getAllContacts()
}, [])

const getAllContacts = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}`)
    const data = await res.json()
    setContacts(data)
   
}

const searchHandler = (searchText) => {
  setSearchText(searchText);
  if (searchText !== "") {
    const newContactList = contacts.filter((contact) => {
      return Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setSearchResults(newContactList);
  } else {
    setSearchResults(contacts);
  }
}
  return (
    
      <div className="App">
        <Header />
        <Finder 
          text = { searchText }
          searchKeyword = { searchHandler }
         />
        <ContactList 
          contacts={ searchText.length < 1 ? contacts : searchResults }/> 
      </div>
    
  );
}

export default App;
