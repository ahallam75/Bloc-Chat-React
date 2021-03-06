import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import { RoomList } from './components/RoomList';
import { MessageList } from './components/MessageList.js';
import { User } from './components/User.js';

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
    this.state = {
      activeRoom: "",
      user: "",
      username: ""
    };
    this.activeRoom = this.activeRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  activeRoom(room) {
    this.setState({ activeRoom: room });
  }

  setUser(user) {
    this.setState({ user: user });
  }

  render() {
    return (
      <div class="card border-dark mb-3">
        <header class="card-header"><h1>BLOC CHAT!</h1></header>
        <div class="container">
          <h2>{!this.state.activeRoom.name ? "Create or Select a Room" : this.state.activeRoom.name}</h2>
        </div>
        <User firebase={firebase} setUser={this.setUser} user={this.state.user} />
        <RoomList firebase={firebase} activeRoom={this.activeRoom} />
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom.key} user={this.state.user} />
      </div>
    );
  }
}


export default App;

