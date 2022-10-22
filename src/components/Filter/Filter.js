import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';


const Filter = ({ filter, onChange }) => {
    return (
        <div className={css.filterWrap}>
            <label className={css.label}>Find contact by name</label>
            <input
                className={css.input}
                value={filter}
                type='text'
                onChange={onChange}
            ></input>
        </div>
    );
};
export default Filter;

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  
};

