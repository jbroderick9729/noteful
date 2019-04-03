import React, { Component } from 'react';
import NoteItem from './NoteItem';
// import { Link } from 'react-router-dom';

class NotePage extends Component {
    render() {
        console.log(this.props)
        const history = this.props.history;
        return (
            <div>
                <button onClick={history.goBack}>Back</button>
                <ul>
                <NoteItem {...this.props}/>
                </ul>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default NotePage;