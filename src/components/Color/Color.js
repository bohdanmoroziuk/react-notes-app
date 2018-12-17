import React from 'react';
import PropTypes from 'prop-types';
import styles from './Color.module.css';

const Color = ({ color, handleSelect }) => (
    <label className={styles.root}>
        <input className={styles.switch} type="radio" name="color" value={color} onChange={handleSelect} />
        <div className={styles.marker} style={{backgroundColor: color}}></div>
    </label>
);

Color.propTypes = {
    color: PropTypes.string.isRequired,
    handleSelect: PropTypes.func.isRequired
};

export default Color;