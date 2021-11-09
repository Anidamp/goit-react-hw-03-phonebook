import './App.css';
import { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addNewContact =obj => {
    const { contacts } = this.state;
    const { name } =obj;
    if (contacts.some(({ name }) => name ===obj.name)) {
      alert(`Sorry, ${name} is already in contacts list`);
      return;
    }
    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, obj],
      };
    });
  };

  handleDelContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  render() {
    const { filter } = this.state;
    const { handleDelContact, addNewContact, onChangeFilter } = this;
    const visibleContacts = this.getFilteredContacts();
    return (
      <div className="App">
        <h2>Phonebook</h2>
        <ContactForm addNewContact={addNewContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={onChangeFilter} />
        <ContactsList contacts={visibleContacts} handleDelContact={handleDelContact} />
      </div>
    );
  }
}



