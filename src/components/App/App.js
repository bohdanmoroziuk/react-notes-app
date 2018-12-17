import React from 'react';
import Header from '../../components/Header/Header';
import NoteEditor from '../../containers/NoteEditor/NoteEditor';
import NoteList from '../../containers/NoteList/NoteList';

const App = () => ( 
    <div className={styles.root}>
        <Header title="Notes" />
        <NoteEditor />
        <NoteList />
    </div>
);

export default App;