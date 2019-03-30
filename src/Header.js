import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <Link to='/'><h1 role="banner">Noteful</h1></Link>
            </header>
        )
    }
}