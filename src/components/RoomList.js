import React, { Component } from 'react';

export class RoomList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: "", 
      rooms: []
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
    this.handleChange = this.handleChange.bind(this);
    this.createRoom = this.createRoom.bind(this); 
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  createRoom(e) {
    e.preventDefault();
    this.roomsRef.push({ name: this.state.title });
    this.setState({ title: "" });  //This allows the text in create room textbox to disappear/reset after you create each room. DO NOT REMOVE! 
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
     });
  }

  render() {
    const roomForm = (
      <div class="container">
      <form onSubmit={this.createRoom}>
        <input type="text" value={this.state.title} placeholder="Enter Room Name" onChange={this.handleChange}/>
        <input type="submit" value="Create" class="btn btn btn-sm btn-dark" />
      </form>
      </div>
    );

    const roomList = this.state.rooms.map((room) =>
    <div class="container">
      <li key={room.key} onClick={(e) => this.props.activeRoom(room, e)}>{room.name}</li>
    </div>
    );
    
    return (
    
      <div class="container">
        <div>Create a Room: {roomForm}</div>
        <ul>Chat Rooms: {roomList}</ul>
      </div>
    
    );
    }
  }