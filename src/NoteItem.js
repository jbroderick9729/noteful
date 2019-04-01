import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NoteItem extends Component {

    render() {
        const noteId = `/notes/${this.props.id}`;
        
        return (
            <li key={this.props.id}>
                <Link to={noteId}>
                
                    <p>Title: {this.props.name}</p>
                    <p>Last Modified: {this.props.modified}</p>
                
                </Link>
            </li>
        )
    }
}