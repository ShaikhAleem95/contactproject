import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function ContactList(props) {
  const{contact,removeContact}=props
  console.log(contact)

console.log(contact)

const contactList=contact.map((val)=>{
  return(
    <div className='contacts'>
            <div style={{marginleft:"2px"}}>{val.data.name}</div>
            <div className='email'>{val.data.email}</div>
            <span onClick={()=>removeContact(val.id)}><DeleteIcon/></span>
     
    </div>
  )
})
  return (
        <>
            <div className='ContactsHeader'>ContactList </div>
            <div>{contactList}</div>
        </>
  )
}

export default ContactList
