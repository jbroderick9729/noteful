import React from 'react';

export default function NoteDetail(props) {
        
        const noteInfo = props.noteInfo;

        return (
            
                <div>
                    <header>
                        <h2>{noteInfo.name}</h2>
                    </header>
                    <p>{noteInfo.content}</p>
                </div>
        )

}