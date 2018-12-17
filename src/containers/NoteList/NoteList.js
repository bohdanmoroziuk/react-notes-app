import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectNotes } from '../../selectors';
import Note from '../Note/Note';
import styles from './NoteList.module.css';

const NoteList = ({ notes }) => (
    <div className={styles.root}>
        {notes && notes.map(note => (
            <Note key={note.id} note={note} />
        ))}
    </div>
); 

NoteList.propTypes = {
    notes: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    notes: selectNotes(state)
});

export default connect(
    mapStateToProps
)(NoteList);