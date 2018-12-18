import React from 'react';
import Header from '../../components/Header/Header';
import ColorPicker from '../../containers/ColorPicker/ColorPicker';
import NoteEditor from '../../containers/NoteEditor/NoteEditor';
import NoteList from '../../containers/NoteList/NoteList';
import Search from '../../containers/Search/Search';
import styles from './App.module.css'

const App = () => ( 
    <div className={styles.root}>
        <Header title="Notes" />
        <NoteEditor />
        <ColorPicker />
        <Search />
        <NoteList />
    </div>
);

export default App;