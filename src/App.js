import './App.css';
import Header from './Components/Header';
import AddContact from './Components/AddContact';
import ContactList from './Components/ContactList';
import { useEffect, useState } from 'react';
import uuid4 from 'uuid4';

function App() {

  const [contact,setcontact]=useState([]);

  //local storage in used usedeffect
  const localstoreagekey="contact"
  useEffect(()=>{
    localStorage.setItem(localstoreagekey,JSON.stringify(contact))
  },[contact])
////////
  const addContact=(data)=>{
 
    // install npm install uuid4 ye eak function unique id generate karta hai    
    setcontact([...contact,{id:uuid4(),data}])
    
  }
  const removeContact=(id)=>{
    const updatelist=contact.filter((val)=>{
      return  val.id !== id;
    })
    setcontact(updatelist)
  
  }
  return (
    <div>
      <Header/>
      <AddContact addContact={addContact}/>
      <ContactList contact={contact} removeContact={removeContact} />
    </div>
  );
}

export default App;
