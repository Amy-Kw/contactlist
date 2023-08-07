//create a button that allows you to pick users and add it to the app.jsx
//side note for me,its similar to yesturday lesson - think of the pizza lesson
//make a function to call out to inividual ppl
//import data from react

import { useState, useEffect } from 'react'
import ContactListing from './ContactList'
import ContactRow from './ContactRow'


export default function SelectedContact({
    pickMyId,
    myId 
 }) {
     const [contact, setContact] = useState({}) //DO NOT USE NULL - THATS WRONG! -LEAVE THE ARRAY EMPTY
 
     useEffect(() => {
         async function fetchSelectedContact() {
             try {
                 const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${myId}`)
                 const result = await response.json()
                 setContact(result)
             } catch (error) {
                 console.error(error)
             }
         }
         fetchSelectedContact()
     }, [])
     return (
         <div>
             <p>
                 <b>Name:</b> {contact.name}
             </p>
             <p>
                 <b>Email:</b> {contact.email}
             </p>
             <p>
                 <b>Phone:</b> {contact.phone}
             </p>
             <div>
                 <b>Address:</b>
                 <p>{contact.address?.street}</p>
                 <p>{contact.address?.city}</p>
                 <p>{contact.address?.zipcode}</p>
             </div>

            <div>
                <button type="button" onClick={() => {pickMyId(null)}}> Return to main page Contact
                List
                </button>
            </div>



         </div>
     )
 }

 //The ? is like is there and address? sure then fine street.
 //The ? is what everyone struggled with and the not including the null bc that will brake the code
