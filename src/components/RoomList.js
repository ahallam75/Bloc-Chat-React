import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export class RoomList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rooms: [] //Added per checkpoint 2 instructions.
    };
    this.roomsRef = this.props.firebase.database().ref('rooms'); 
  }
}

componentDidMount() {
  this.roomsRef.on('child_added', snapshot => {
    console.log(snapshot);
  });
}

/* 

componentDidMount() {
      this.roomsRef.on('child_added', snapshot => {
        const room = snapshot.val();
        room.key = snapshot.key;
        this.setState( { rooms: this.state.rooms.concat( room ) } )
      });
    }

*/

/*
render () {
  return (
    {this.state.rooms.map()}  
  )
}
*/

