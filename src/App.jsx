import './App.css'
import { useState } from 'react'
import ContactList from "./components/ContactList"
import SelectedContact from './components/pickingList';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      { selectedContactId ? (
        <SelectedContact
          myId={selectedContactId}
          pickMyId={setSelectedContactId}
        />
      ) : (
        <ContactList chosenId={setSelectedContactId}/> 
      )}

    </>
  )
}







// import './App.css'
// import { useState } from 'react'
// import ContactList from './components/ContactList';
// import SelectedContact from './components/pickingList';



// export default function App() {
//   const [selectedContactId, setSelectedContactId] = useState(null)
//   // const [contacts, setContacts] = useState([])
//   // console.log("Contacts: ", contacts)
  
//   return (
//     <>
//     { selectedContactId ? (
//       <SelectedContact
//       myId={selectedContactId}
//       pickMyId={setSelectedContactId}
//       />

//     ) : (
//       <ContactList chosenId={setSelectedContactId} />
//     )}
//     </>
//   )
// }






















//og code

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
