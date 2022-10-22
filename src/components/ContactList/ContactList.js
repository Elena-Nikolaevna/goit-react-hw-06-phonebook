import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ children }) => (
	<> 
		<ul className={css.contactsList}>
			{children}
		</ul>
	</>
);

ContactList.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContactList;