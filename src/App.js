import "./App.css";
import { ContactList } from "./components/ContactList";
import contactsJson from "./contacts.json"
import {useState} from 'react'

const copyContacts = contactsJson.slice(0,5)
function App() {

  const [contacts, setContact] = useState(copyContacts);
  
  const handleClikAdd = (c)=>{
    if(contacts.length === contactsJson.length) return;
    let index = Math.floor(Math.random() * contactsJson.length )
    let random = contactsJson[index]
    const alreadyExist = contacts.find((c)=> c.id === random.id)

    if(!alreadyExist){
      setContact([...contactsJson, random])
    }else {
      handleClikAdd()
    }

  }
    
  const handleSortByPopularity = () =>{
  let copyContacts = [...contactsJson]
    copyContacts.sort((a,b) =>{
      return b.popularity - a.popularity
    })
    setContact(copyContacts)
  }

  const handleSortByName = ()=>{
  let copyContacts = [...contactsJson]
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
        <ContactList item={contact}
        deleteContact={handleDelete}
        />
      )
      })}
        </tbody>
        </table>

  </div>;
}

export default App;
