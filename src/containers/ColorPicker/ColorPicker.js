import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addColor } from '../../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ColorPicker.module.css';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: ''
        };
    } 

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const { color } = this.state;

        color.trim().length && this.props.addColor(color);
    }

    render() {
        const { color } = this.state;

        return (
            <form className={styles.root} onSubmit={this.handleSubmit}>
                <input className={styles.value} type="color" name="color" value={color} onChange={this.handleChange} />
                <button className="button-reset" type="submit">
                    <FontAwesomeIcon className="icon" icon="plus" size="sm" />
                </button>
            </form>
        );
    }
}

ColorPicker.propTypes = {
    addColor: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    addColor: (color) => dispatch(addColor(color))
}); 

export default connect(
    null,
    mapDispatchToProps
)(ColorPicker);