
import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ contacts, onDeleteContact }) => (
	<>
			{contacts.map(({ id, name, number }) => (
				<li key={id} className={css.contactsItem}>
					<p className={css.contactText}>
						{name}: {number}
					</p>
					<button
						className={css.button}
                        type='button'
					    onClick={() => onDeleteContact(id)}>
						Delete
					</button>
				</li>
			))}
	</>
);

ContactItem.propTypes = {
    contacts: PropTypes.arrayOf(
		PropTypes.exact({
		  name: PropTypes.string.isRequired,
		  number: PropTypes.string.isRequired,
		  id: PropTypes.string.isRequired,
		})
	  ),
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;