import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Color from '../../components/Color/Color';
import { selectColors } from '../../selectors';
import styles from './ColorPalette.module.css';

const ColorPalette = ({ colors, handleSelect }) => (
    <div className={styles.root}>
        {colors && colors.map(color => (
            <Color key={color} color={color} handleSelect={handleSelect} />
        ))}
    </div>
);

ColorPalette.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleSelect: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    colors: selectColors(state)
});

export default connect(
    mapStateToProps
)(ColorPalette);