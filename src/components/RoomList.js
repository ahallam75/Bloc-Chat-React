import React, { Component } from 'react';

export class RoomList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rooms: [] //Added per checkpoint 2 instructions.
    };
    this.roomsRef = this.props.firebase.database().ref('rooms'); 
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
     });
  }

  render() {
    { console.log(room.name) };
    {
    const roomList = this.state.rooms.map((room) =>
    <li key={room.key}>{room.name}</li>
    );
    return (
    <div>
    <ul>{roomList}</ul>
    </div>
    );
  }
}
}