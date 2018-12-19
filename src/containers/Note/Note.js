import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeNote, editNote } from '../../actions';
import styles from './Note.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.note.text,
            isEditing: false
        };
    }

    handleTextChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleNoteSave = () => {
        const { text } = this.state;
        const { text: prevText, id } = this.props.note;

        if (text.trim().length && text !== prevText) {
            this.props.editNote(id, text);
        }

        this.handleModeToggle();
    }

    handleModeToggle = () => {
        this.setState(prevState => ({ isEditing: !prevState.isEditing }));
    }

    handleNoteRemove = () => {
        this.props.removeNote(this.props.note.id);
    }

    render() {
        const { note } = this.props;
        const { text, isEditing } = this.state;

        return (
            <div className={styles.root} style={{backgroundColor: note.color}}>
                <textarea 
                    className={styles.text} 
                    readOnly={!isEditing} 
                    name="text" 
                    value={text} 
                    onChange={this.handleTextChange}>
                </textarea>

                <div className={styles.control}>
                    {isEditing ? (
                        <button type="button" onClick={this.handleNoteSave}>
                            <FontAwesomeIcon className="icon" icon="save" size="sm" />
                        </button>
                    ) : (
                        <button type="button" onClick={this.handleModeToggle}>
                            <FontAwesomeIcon className="icon" icon="edit" size="sm" />
                        </button>
                    )}
                    <button type="button" onClick={this.handleNoteRemove}>
                        <FontAwesomeIcon className="icon" icon="trash-alt" size="sm" />
                    </button>
                </div>
            </div>
        );
    }
}

Note.propTypes = {
    note: PropTypes.object.isRequired,
    editNote: PropTypes.func.isRequired,
    removeNote: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    editNote: (id, text) => dispatch(editNote(id, text)),
    removeNote: (id) => dispatch(removeNote(id))
});

export default connect(
    null,
    mapDispatchToProps
)(Note);