import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Folder extends Component {
    render() {
        const folderId = `/folder/${this.props.id}`;

        return (
            <Link to={folderId}>
                <li>
                    <p>{this.props.name}</p>
                </li>
            </Link>
        )
    }
}