import React, { useState } from 'react'

function AddContact({addContact}) {

  const [contactdata,setContactdata]=useState({name:" ",email:" "});

  const handlechange = (e)=>{
    if(e.target.name === "name"){
        setContactdata({...contactdata, name: e.target.value})
    }
    else{
        setContactdata({...contactdata,email: e.target.value})
    }
  }


  const handleadd =() =>{
    if(contactdata.name === ""|| contactdata.email === ""){
    alert("plase fill all the details");
    return
  }
       
     addContact(contactdata)
     setContactdata({name:"",email:""})
  }
  return (
    <div className='formHeader'>
           <div className='add-contact'>AddContact</div>
                <form>
                    
                     <label>Name</label><br/>
                     <input type='text' placeholder='enter name' name='name' value={contactdata.name} 
                     onChange={handlechange}></input><br/>

                     <label>E-mail</label><br/>
                     <input type='text' placeholder='enter E-main' name='email' value={contactdata.email} 
                     onChange={handlechange}></input><br/>

                </form>

                <button className='btn' onClick={handleadd}>Add Contact</button>
      
    </div>
  )
}

export default AddContact
