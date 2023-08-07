import { useState } from "react"
import {useEffect} from "react"
import ContactRow from "./ContactRow";



const ContactList = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];


export default function ContactList({thisId})
const [contacts, setContacts] = useState([])

      useEffect(() => {
      async function fetchContacts() {
  
        try {
          const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/");
          console.log(`response: ${response}`)
          const results = await response.json();
          console.log(results);
          setContacts(results)
          
      
            } catch (error) {
              console.error(error);
          }
        }
        fetchContacts()
    }, []);


//you don't need the colSpan="3" for line 42 btw <th here>

  return (
    <table>
      <thead>
        <tr>
          <th>Contact List</th> 
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow 
          key={contact.id} 
          bubble={contact}
          pickId={thisId} />;
        })
        }
      </tbody>
    </table>
  );
