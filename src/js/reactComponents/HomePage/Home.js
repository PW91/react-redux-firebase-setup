import React, { Component } from 'react';
import { fetchUserData } from '../../reduxActions/currentUserActions';
import Header from './Header';
import CurrentTask from './CurrentTask';
import TaskList from './TaskList';
import store from '../../store/Store';


export default class Home extends Component {

  componentWillMount() {
    store.dispatch(fetchUserData('John'))
  }

  render() {
    return (
      <div className='home-page'>
          <Header/>
          <CurrentTask/>
          <TaskList/>
      </div>
    );
  }
}