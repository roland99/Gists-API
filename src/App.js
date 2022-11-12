import logo from './logo.svg';
import './App.css';
import GistContainer from './gists/gist-container';
import React from 'react';

class App extends React.Component {
  
  render(){
    return (
    <div class="body">
      <GistContainer></GistContainer>
    </div>
    );
  };
}

export default App;
