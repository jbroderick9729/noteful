import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import NoteList from './NoteList';
import NavFolders from './NavFolders';
import NotePage from './NotePage';
import dummyStore from './dummyStore';

class App extends Component {
  state = {
    dummyStore
  }
  
  render() {
    
    const { notes, folders } = this.state.dummyStore;
    console.log('notes in state', notes);
    console.log('folders in state', folders);
    
    return (
      <div>
        <header>
            <Route path='/' component={Header} />
        </header>
        <div className="main-section">
          <nav>
          <Route exact path='/' 
                    render={() => <NavFolders folders={folders} />}
          />
          <Route exact path='/folder/:folderId' 
                    render={() => <NavFolders folders={folders} />}
          />
          </nav>
          <main>
          <Route exact path='/' render={() => {
              const note = notes.map(note => note)
            return <NoteList notes={note} />}}/>  
          <Route exact path='/folder/:folderId' render={({match}) => {
              const note = notes.filter(note => note.folderId === match.params.folderId)
              .map((note) => note)
             return <NoteList notes={note} />}
          } />
          <Route path='/note/:noteId' render={({match, history}) => {
            const note = notes.filter(note => note.id === match.params.noteId)
            return <NotePage {...note[0]} history={history}/>}} />
          </main>
        </div>  
      </div>
    );
  }
}

export default App;
