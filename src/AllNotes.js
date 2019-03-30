import React, { Component } from 'react';
import NoteItem from './NoteItem';

export default class AllNotes extends Component {
    render() {
        console.log('this.props.notes', this.props.notes);

        const notes = this.props.notes.map(note => <NoteItem {...note}/>)
       
        return (
            <ul>
                { notes }
            </ul>
        )
    }
}

AllNotes.defaultProps = {
    notes: []
}