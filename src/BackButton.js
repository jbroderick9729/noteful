import React from 'react';

export default function BackButton(props) {
        return <button onClick={props.history.goBack}>Back</button>
}