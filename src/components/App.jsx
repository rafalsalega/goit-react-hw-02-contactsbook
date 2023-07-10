import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';

export const App = () => {
  return <Phonebook />;
};

class Phonebook extends Component {
  state = {
    contacts: [ ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });    
  };

  handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      alert(`${this.state.name} is already in contacts`);
      return;
    }
    this.setState({ contacts: [...this.state.contacts, newContact] });
    e.target.reset();
  };

  handleClick = e => {
    const index = e.target.getAttribute('index');    
    this.state.contacts.splice(
      this.state.contacts.findIndex(contact => contact.id === index),
      1
    );
    this.setState({ contacts: this.state.contacts });
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} />
        <ContactList
          contacts={contacts}
          filter={this.state.filter}
          onClick={this.handleClick}
        />        
      </>
    );
  }
}