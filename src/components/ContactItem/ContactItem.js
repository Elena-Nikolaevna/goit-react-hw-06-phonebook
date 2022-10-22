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
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;