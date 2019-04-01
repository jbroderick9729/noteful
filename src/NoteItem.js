import React from 'react';

export default function NoteItem(props) {

    return (
        <li>
            <p>{props.name}</p>
            <p>{props.modified}</p>
        </li>
    )
}