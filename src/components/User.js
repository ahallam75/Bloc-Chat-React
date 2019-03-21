import React, { Component } from 'react';

export class User extends Component {
    constructor(props) {
      super(props);
      this.signIn = this.signIn.bind(this);
      this.signOut = this.signOut.bind(this);
    }
  
  signIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.props.setUser(user);
    });
  }
  
  signOut() {
    this.props.firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
  }
  
  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.props.setUser(user);
    });
  }
  
    render() {
      return(
        <div class="container">
          <h2>Current User: {this.props.user ? this.props.user.displayName : "Guest"} </h2>
          <div>Please sign in: <button onClick={this.signIn} class="btn btn btn-sm btn-primary">Sign In</button></div>
          <div>Don't forget to sign out: <button onClick={this.signOut} class="btn btn btn-sm btn-danger">Sign Out</button></div>
        </div>
      )
    }
  }