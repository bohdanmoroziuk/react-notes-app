import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeNote } from '../../actions';
import styles from './Note.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };
    }

    handleNoteEdit = event => {

    }

    handleNoteRemove = event => {
        this.props.removeNote(this.props.note.id);
    }

    render() {
        const { note } = this.props;

        return (
            <div className={styles.root} style={{backgroundColor: note.color}}>
                <p className={styles.text}>
                    {note.text}
                </p>

                <div className={styles.control}>
                    <button type="button" onClick={this.handleNoteEdit}>
                        <FontAwesomeIcon className="icon" icon="edit" size="sm" />
                    </button>
                    <button type="button" onClick={this.handleNoteRemove}>
                        <FontAwesomeIcon className="icon" icon="trash-alt" size="sm" />
                    </button>
                </div>
            </div>
        );
    }
}

Note.propTypes = {
    note: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
    removeNote: (id) => dispatch(removeNote(id))
});

export default connect(
    null,
    mapDispatchToProps
)(Note);