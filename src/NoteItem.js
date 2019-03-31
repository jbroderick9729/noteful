import React, { Component } from 'react';

export default class NoteItem extends Component {

    render() {
        return (
            <li>
                <p>{this.props.name}</p>
                <p>{this.props.modified}</p>
            </li>
        )
    }
}