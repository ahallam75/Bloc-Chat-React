import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList.js';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCr9x_CYXRNQfRxQkJoWdpsQzCYsUd52bg",
    authDomain: "bloc-chat-ff868.firebaseapp.com",
    databaseURL: "https://bloc-chat-ff868.firebaseio.com",
    projectId: "bloc-chat-ff868",
    storageBucket: "bloc-chat-ff868.appspot.com",
    messagingSenderId: "164811569504"
  };
  firebase.initializeApp(config);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bloc Chat with React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RoomList firebase={firebase} />
      </div>
    );
  }
}


export default App;

