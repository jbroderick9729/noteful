import React from 'react';
import NoteItem from './NoteItem';

export default function NoteList(props) {
    console.log(props)
    const notes = props.notes.map(note => <NoteItem key={note.id} {...note}/>)

        return (
            <ul>
                {notes}
            </ul>
        )
}

NoteList.defaultProps = {
    notes: []
}