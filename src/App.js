import './App.css';
import { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';
import useLocalStorage from './hooks/useLocalStorage';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App () {
  const [contacts, setContacts] = useLocalStorage('contacts', defaultContacts);
  const [filter, setFilter] = useState('');

  

  const addNewContact = obj => {
    const { name } =obj;
    if (contacts.some(({ name }) => name ===obj.name)) {
      alert(`Sorry, ${name} is already in contacts list`);
      return;
    }
    return(
      setContacts(prev => [...prev,obj])
    );
  };

  const handleDelContact = id => {
    const filteredItem = contacts.filter(contact => contact.id !== id);
    setContacts(filteredItem);
  };

  const onChangeFilter = e => {
    setFilter(e.target.value );
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  return (
      <div className="App">
        <h2>Phonebook</h2>
        <ContactForm addNewContact={addNewContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onChange={onChangeFilter} />
        <ContactsList contacts={getFilteredContacts()} handleDelContact={handleDelContact} />
      </div>

  );
}



