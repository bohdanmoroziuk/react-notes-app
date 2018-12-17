import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchNote } from '../../actions'
import styles from './Search.module.css';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState(
            { [name]: value }, 
            () => this.props.handleSearch(value) 
        );
    }

    render() {
        const { text } = this.state;

        return (
            <form className={styles.root}>
                <input 
                    className={styles.field} 
                    onChange={this.handleChange}
                    value={text}
                    type="text" 
                    name="text"
                    placeholder="Search..." 
                />
            </form>
        );
    }
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    handleSearch: (value) => dispatch(searchNote(value))
});

export default connect(
    null,
    mapDispatchToProps
)(Search);