import React, { Component } from 'react';

export default class NoteItem extends Component {

    render() {
        return (
            <li>
                <p>Title: {this.props.name}</p>
                <p>Last Modified: {this.props.modified}</p>
            </li>
        )
    }
}