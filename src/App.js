import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList';

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

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Bloc Chat</h1>
        </header>
        <RoomList firebase={firebase} />
      </div>
    );
  }
}


export default App;

