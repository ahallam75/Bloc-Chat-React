import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList';
import { MessageList } from './components/MessageList.js';

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
  constructor(props) {
    super(props);
    this.state = {activeRoom: ""};
    this.activeRoom = this.activeRoom.bind(this);
  }

  activeRoom(room) {
    this.setState({ activeRoom: room })
    console.log(this.state.activeRoom) //Remove eventually.
  }

  render() {
    return (
     <div>
        <h1>BLOC CHAT!</h1>
        <h2>{!this.state.activeRoom.name ? "Create or Select a Room" : this.state.activeRoom.name}</h2>
        <RoomList firebase={firebase} activeRoom={this.activeRoom} />
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom.key}/>
      </div>
    );
  }
}


export default App;

