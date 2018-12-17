import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({ title }) => (
    <header className={styles.root}>
        <h1 className={styles.title}>
            {title}
        </h1>
    </header>
);

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;