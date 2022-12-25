import React from "react";
import { useState, useEffect } from 'react';
// import { Component } from "react";
import Form from "./Phonebook/Form/Form";
import Filter from './Phonebook/Filter/Filter'
import ContactList from "./Phonebook/ContactList/ContactList";
import contactsList from "../../src/data/contacts.json"
import "./App.css";

export default function App() {

  const [contacts, setContacts] = useState(() => (JSON.parse(window.localStorage.getItem('contactsArr')) ?? contactsList)); 
 
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
        if (contacts.find(contact => contact.name === data.name)) {
      const message = `Абонент ${data.name} вже є в книзі`;
      alert(message);  
    }
        else {
          
          setContacts(contacts => [data, ...contacts]);
          console.log("in app", contacts, filter);
      
    }  
  }
  useEffect(()=>{
    window.localStorage.setItem('contactsArr', JSON.stringify(contacts))
  }, [contacts]);
  
  const doFilter = (e) => { 
    setFilter(e.currentTarget.value)
  }
  const doClear = () => {
    setFilter(''); 
  }
 function toFoundAbonent(a,b) {
    const normalizedFilter = a.toLowerCase();
    return b.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
 const arr = toFoundAbonent(filter, contacts)

  
  const deleteContact = (contactId) => { 
    setContacts((contacts) => (contacts.filter(contact => contact.id !== contactId)));
  };
  return (
    <div className="Container">
      <h1 className="Tittle">Записник контактів</h1>
      <Form priSubmit={formSubmitHandler} />      
      <div>
        <h2 className="SecondTittle">Контакти</h2>
        <Filter value={filter} onChange={doFilter} onDelete={doClear} />
        <ContactList contacts={arr} onDelete={deleteContact} />
      </div>
    </div>
  );
}
