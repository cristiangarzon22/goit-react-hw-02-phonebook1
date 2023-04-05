import React, { Component } from 'react';
import ContactForm from './ContacForm/ContacForm';
import ContactList from './ContacList/ContactList';
import Filter from '../components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  handleAddContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  }
  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  }
  getFilteredContacts() {
    return this.state.contacts.filter((contact) => (
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    ));
  }

  render() {
    return ( 
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={this.state.contacts} onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={this.getFilteredContacts()} onDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}

export default App;   





