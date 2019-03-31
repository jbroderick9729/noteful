import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import NoteList from './NoteList';
import NavFolders from './NavFolders';
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
          <Route path='/' 
                    render={() => <NavFolders folders={folders} />}
          />
          </nav>
          <main>
          <Route exact path='/' render={() => {
              const note = this.state.dummyStore.notes.map(note => note)
            return <NoteList notes={note} />}}/>  
          <Route path='/folder/:folderId' render={({match}) => {
              const note = this.state.dummyStore.notes.filter(note => note.folderId === match.params.folderId)
              .map((note) => note)
             return <NoteList notes={note} match={match}/>}
          } />       
          </main>
        </div>  
      </div>
    );
  }
}

export default App;
