import React, { Component } from 'react';

/*export class RoomList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rooms: ['Room 1', 'Room 2', 'Room 3'] //Added per checkpoint 2 instructions.
    };
    this.roomsRef = this.props.firebase.database().ref('rooms'); */
    
    
//the <p> tag below is just to test to see if the component is rendering.

class RoomList extends React.Component {
  render() {
    return <p>This is just a test</p>;
  }
}

ReactDOM.render(<RoomList />, getElementById('app'));    
  }



 /*componentDidMount() {
      this.roomsRef.on('child_added', snapshot => {
        const room = snapshot.val();
        room.key = snapshot.key;
        this.setState({ rooms: this.state.rooms.concat( room ) })
      });
    }

render () {
  return (
    {this.state.rooms.map()}  
  )
}
*/