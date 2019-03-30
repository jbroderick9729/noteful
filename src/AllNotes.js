import React, { Component } from 'react';
import NoteItem from './NoteItem';
import dummyStore from './dummyStore';

export default function AllNotes(props) {
        const notes = dummyStore.notes.filter(note => note.folderId === props.match.params.folderId)
        .map(note => <NoteItem {...note} />)
        console.log(notes);

        return (
            <ul>
                {notes}
            </ul>
        )
}

// AllNotes.defaultProps = {
//     notes: []
// }