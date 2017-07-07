import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from '../firebase/firebase';
import { changeLocalUserName, changeDatabaseUserName } from '../reduxActions/userActions';



class App extends Component {

  constructor() {

    super();

    this.handleDatabaseUpdate = this.handleDatabaseUpdate.bind(this);
    this.handleStoreUpdate = this.handleStoreUpdate.bind(this);
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('user');
    rootRef.on('value', snap => {
      const newName = snap.val();
      this.props.dispatch(changeDatabaseUserName(newName));
    })     
   }

   handleDatabaseUpdate() {
    const newName = this.refs.myInput1.value;
    firebase.database().ref().child('user').set(newName);
   } 

   handleStoreUpdate() {
      const newName = this.refs.myInput2.value;
      this.props.dispatch(changeLocalUserName(newName));
   }

  render() {
    return (
      <div className='App'>
        <h2>{this.props.databaseUser}</h2>
        <input ref='myInput1'/>
        <button onClick={this.handleDatabaseUpdate}>UPDATE DATABASE</button>
        <h2>{this.props.localUser}</h2>
        <input ref='myInput2'/>
        <button onClick={this.handleStoreUpdate}>UPDATE STORE</button>
        <Link to='page'>Go to page</Link>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    localUser: state.user.localUserName,
    databaseUser: state.user.databaseUserName
  }
}



export default connect(mapStateToProps)(App);