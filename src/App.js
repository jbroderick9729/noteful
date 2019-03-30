import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AllNotes from './AllNotes';
import NavFolders from './NavFolders';
import dummyStore from './dummyStore';

class App extends Component {
  state = {
    store: dummyStore
  }
  
  render() {
    
    const { notes, folders } = this.state.store;
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
                    render={() => <NavFolders folders={this.state.store.folders} />}
          />
              {/* <Route path='/notes/:notes.id' component={BackButton} /> */}
          </nav>
          <main>
          {/* <Route path='/' 
                 render={() => <AllNotes notes={this.state.store.notes} />}
          /> */}
          <Route path='/folder/:folderId' component={AllNotes} />       


              {/* <Route path='/notes/notes.id' component={NotesContent} /> */}
          </main>
        </div>  
    </div>
    );
  }
}

export default App;
