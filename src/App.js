import "./App.css";
import { ContactList } from "./components/ContactList";
import contactsJson from "./contacts.json"
import {useState} from 'react'


function App() {

  let copyContacts = [...contactsJson]
  const [contacts, setContact] = useState(copyContacts.slice(0, 5));
   
  const handleClikAdd = ()=>{

    let random = Math.floor(Math.random() * contactsJson.length )
    console.log(random);
    for (let i = 0; i < contactsJson.length; i++) {
      copyContacts.push(contactsJson[random])
    }
    return setContact(copyContacts)
  }
    
  const handleSortByPopularity = () =>{
    copyContacts.sort((a,b) =>{
      return b.popularity - a.popularity
    })
    setContact(copyContacts)
  }

  const handleSortByName = ()=>{
    copyContacts.sort((a,b) =>{
      return a.name.localeCompare(b.name)
    })
    setContact(copyContacts)
  }

  const handleDelete = (e) => {
    const  copyContacts = [...contactsJson]; 
    let index = copyContacts.indexOf(e.target.value)
    if (index !== -1) {
          copyContacts.splice(index, 1);
          setContact(copyContacts)
    }
}

  return <div className="App">
    <h1>IronContacts</h1>
    <button onClick={handleClikAdd}>Add Random Contact</button>
    <button onClick={handleSortByPopularity}>Sort by popularity</button>
    <button onClick={handleSortByName}>Sort by name</button>

    <table>
        <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
      {contacts.map((contact) =>{
        return (
        <ContactList item={contact}/>
      )
      })}
        </tbody>
        </table>

  </div>;
}

export default App;
