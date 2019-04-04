import React from 'react';
import Folder from './Folder';

export default function NavFolders(props) {
       
        const folders = props.folders.map(folder => <Folder key={folder.id} {...folder} />)

        return (
            <ul>
                { folders }
            </ul>
        )
}
