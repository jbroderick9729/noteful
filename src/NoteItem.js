import React from 'react';
import { Link } from 'react-router-dom';

export default function NoteItem(props) {
    const noteId = `/note/${props.id}`;
    console.log('props in NoteItem', props)
    return (
        <Link to={noteId}>
            <li>
                <p>{props.name}</p>
                <p>{props.modified}</p>
            </li>
        </Link>
    )
}