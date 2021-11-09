import s from './ContactsList.module.css';
import PropTypes from 'prop-types';

export default function ContactList ({ contacts, handleDelContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({id, name, number,}) =>
        <li key={id} className={s.item}>
          <p>{name}</p>
          <p>{number}</p>
          <button  className={s.btn} type='button' onClick={() => handleDelContact(id)}>X</button>
        </li>)}
    </ul>
  )
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelContact: PropTypes.func.isRequired,
};
