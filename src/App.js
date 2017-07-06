import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import firebase from './js/firebase/firebase';
import { changeUsername } from "./js/reduxActions/userActions";



class App extends Component {

  constructor() {

    super();

    this.state = {
      speed: 3434
    }

    this.handleDatabaseUpdate = this.handleDatabaseUpdate.bind(this);
    this.handleStoreUpdate = this.handleStoreUpdate.bind(this);
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child("text");
    rootRef.on("value", snap => {
      this.setState({
        speed: snap.val()
      })
    })     
   }




   handleDatabaseUpdate() {
    const newName = this.refs.myInput1.value;
    firebase.database().ref().child('text').set(newName);
   } 

   handleStoreUpdate() {
      const newName = this.refs.myInput2.value;
      this.props.dispatch(changeUsername(newName));
   }



  render() {
    return (
      <div className="App">
        <h2>{this.state.speed}</h2>
        <input ref="myInput1"/>
        <button onClick={this.handleDatabaseUpdate}>UPDATE DATABASE</button>
        <h2>{this.props.userName}</h2>
        <input ref="myInput2"/>
        <button onClick={this.handleStoreUpdate}>UPDATE STORE</button>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    userName: state.user.userName
  }
}



export default connect(mapStateToProps)(App);