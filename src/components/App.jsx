import React from "react";
import { useState, useEffect } from 'react';
// import { Component } from "react";
import Form from "./Phonebook/Form/Form";
// import Filter from './Phonebook/Filter/Filter'
import ContactList from "./Phonebook/ContactList/ContactList";
// import contactsList from "../../src/data/contacts.json"
import "./App.css";

export default function App() {
  const initialValue =[
      { "id": "id-1", "name": "Rosie Simpson", "number": "459-12-56" },
      { "id": "id-2", "name": "Hermione Kline", "number": "443-89-12" },
      { "id": "id-3", "name": "Eden Clements", "number": "645-17-79" },
      { "id": "id-4", "name": "Annie Copeland", "number": "227-91-26" }
]
  const [contacts, setContacts] = useState(JSON.parse(window.localStorage.getItem('contactsArr')) ?? initialValue); 
  // didMount, як все запрацює, попробувать ліниву ініціалізацію
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
        if (contacts.find(contact => contact.name === data.name)) {
      const message = `Абонент ${data.name} вже є в книзі`;
      alert(message);  
    }
        else {
          
          setContacts(contacts => [data, ...contacts]);
          console.log("in app", contacts, filter);
      // this.setState(({ contacts }) => ({
      //   contacts: [...contacts, data],
      //   }));
    }  
  }
  useEffect(()=>{
    window.localStorage.setItem('contactsArr', JSON.stringify(contacts))
  }, [contacts]);
  
  // const doFilter = (e) => {//поки так, але можливо тут ще useEffect потрібен 
  //   setFilter(e.currentTarget.value)
  // }
  // const doClear = () => {
  //   setFilter(''); // як запрацює основний код, замість doClear можна спробувати передати просто SetFilter
  // }
  return (
    <div className="Container">
      <h1 className="Tittle">Записник контактів</h1>
      <Form priSubmit={formSubmitHandler} />      
      <div>
        <h2 className="SecondTittle">Контакти</h2>
        {/* <Filter value={filter} onChange={doFilter} onDelete={doClear} /> */}
        <ContactList contacts={contacts}  />
      </div>
    </div>
  );
}


//----------------------------------CLASS----------------------------------//
// class App extends Component {
//   state = {
//    contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter:'',
//   }  
//   formSubmitHandler = data => {
//         if (this.state.contacts.find(contact => contact.name === data.name)) {
//       const message = `Абонент ${data.name} вже є в книзі`;
//       alert(message);  
//     }
//         else {
          
//       this.setState(({ contacts }) => ({
//         contacts: [...contacts, data],
//       }));
//           console.log("in app", this.state)
//     }  
//   }
//   componentDidMount() {     
//     const myContactsFromLocalStorage = JSON.parse(localStorage.getItem('contactsArr'));    
//     if (myContactsFromLocalStorage) {
//       this.setState({ contacts: myContactsFromLocalStorage });
//     }    
//   }
//   componentDidUpdate(prevProps, prevState) {    
//     if (this.state.contacts!== prevState.contacts) {     
//       localStorage.setItem('contactsArr', JSON.stringify(this.state.contacts));     
//     }
//   }  
//   doFilter = (e) => {
//     this.setState({ filter: e.currentTarget.value });       
//   }
//   doClear = () => {
//     this.setState({ filter: '' })
//   }
//   toFoundAbonent = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLocaleLowerCase();
//     return contacts.filter(abon =>
//       // console.log("abon", abon)
//       abon.name.toLocaleLowerCase().includes(normalizedFilter)
//     );
//   }
//   deleteContact = (contactId) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };
//   render() {
//     const { filter} = this.state;
//     const foundAbonent = this.toFoundAbonent();
//     return (
//     <div className="Container">
//       <h1 className="Tittle">Записник контактів</h1>
//       <Form priSubmit={this.formSubmitHandler} />      
//       <div>
//         <h2 className="SecondTittle">Контакти</h2>
//         <Filter value={filter} onChange={this.doFilter} onDelete={this.doClear } />
//         <ContactList contacts={foundAbonent} onDelete={this.deleteContact} />
//       </div>
//     </div>
//   );
// };
// };
// export default App;