import React from 'react';
//import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import {  useSelector } from 'react-redux';

const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <h2 className={css.title}>Phonebook</h2>

      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
        />
      ))}
    </>
  );
};

/* (
	
	<> 
		<ul className={css.contactsList}>
			{children}
		</ul>
	</>
); */

/* ContactList.propTypes = {
  children: PropTypes.node.isRequired,
}; */

export default ContactList;
