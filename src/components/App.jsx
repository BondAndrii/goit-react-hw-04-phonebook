import React, { Component } from "react"; 
import Form from "./Phonebook/Form/Form";
import Filter from './Phonebook/Filter/Filter'
import ContactList from "./Phonebook/ContactList/ContactList";
import "./App.css"

class App extends Component {
  state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter:'',
  }  
  formSubmitHandler = data => {
        if (this.state.contacts.find(contact => contact.name === data.name)) {
      const message = `Абонент ${data.name} вже є в книзі`;
      alert(message);  
    }
    else {
      this.setState(({ name, number, contacts }) => ({
        contacts: [...contacts, data],
        }));
    }  
  }
  componentDidMount() {    
    const myContactsJson = localStorage.getItem('contacts');    
    const myContactsNormal = JSON.parse(myContactsJson);    
    if (myContactsNormal) {
      this.setState({ contacts: myContactsNormal });
    }    
  }
  componentDidUpdate(prevProps, prevState) {    
    if (this.state.contacts!== prevState.contacts) {     
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));     
    }
  }  
  doFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });       
  }
  doClear = () => {
    this.setState({ filter: '' })
  }
  toFoundAbonent = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(abon => abon.name.toLocaleLowerCase().includes(normalizedFilter));
  }
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  render() {
    const { filter} = this.state;
    const foundAbonent = this.toFoundAbonent();
    return (
    <div className="Container">
      <h1 className="Tittle">Записник контактів</h1>
      <Form priSubmit={this.formSubmitHandler} />      
      <div>
        <h2 className="SecondTittle">Контакти</h2>
        <Filter value={filter} onChange={this.doFilter} onDelete={this.doClear } />
        <ContactList contacts={foundAbonent} onDelete={this.deleteContact} />
      </div>
    </div>
  );
};
};
export default App;