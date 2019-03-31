import React from 'react';
import NoteItem from './NoteItem';

export default function AllNotes(props) {
    // console.log(props)
    // let notes;
    // console.log(props.notes)

    // if(props.match.path !== "/"){
    //     notes = props.notes.filter(note => note.folderId === props.match.params.folderId)
    //     .map((note, i) => <NoteItem key={i} {...note} />)
    // }
    // else {
    //     notes = props.notes.filter(note => note.folderId !== props.match.params.folderId)
    //     .map((note, i) => <NoteItem key={i} {...note} />)
    // }

    const notes = props.notes.map(note => <NoteItem key={note.id} {...note}/>)

        return (
            <ul>
                {notes}
            </ul>
        )
}

AllNotes.defaultProps = {
    notes: []
}