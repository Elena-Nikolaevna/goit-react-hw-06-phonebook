//import React from 'react';
///import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div className={css.filterWrap}>
      <label className={css.label}>Find contact by name</label>
      <input
        className={css.input}
        value={filter}
        type="text"
        onChange={handleFilterChange}
      ></input>
    </div>
  );
};
export default Filter;

/* Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}; */
