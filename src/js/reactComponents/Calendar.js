import React, { Component } from 'react';
import Popup from 'react-popup';
import AddTaskPopup from './AddTaskPopup';
import store from '../store/Store';
import { connect } from 'react-redux';
import { fetchUsers } from '../reduxActions/calendarDataActions';
import UserLine from './UserLine';



class Calendar extends Component {

  constructor() {

    super();

    this.state = {
      week: null,
      firstDayOfWeek: null
    }

    this.calculateCurrentDate = this.calculateCurrentDate.bind(this);
  }

  componentWillMount() {
    store.dispatch(fetchUsers());
    this.calculateCurrentDate();
  }

  calculateCurrentDate() {

    Date.prototype.getWeek = function() {
        var onejan = new Date(this.getFullYear(), 0, 1);
        return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    }

    var weekNumber = (new Date()).getWeek();
  
    const now = new Date();
    const currentYear = now.getFullYear();

    var d = (1 + (weekNumber - 1) * 7);

   var dzien = new Date(currentYear, 0, d+1);

   console.log(weekNumber, dzien);
   
   this.setState({week: weekNumber, firstDayOfWeek: dzien})

   console.log(this.state);

  }

	handlePopup(e) {

		Popup.registerPlugin('prompt', function () {

		    this.create({
		        title: null,
		        content: <AddTaskPopup field={e.target}/>
		    });
		});

		Popup.plugins().prompt();
	}

  render() {

    return (
      <div className='calendar'>
        <div><h1>WEEK {this.state.week}</h1></div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Poniedziałek</th>
              <th>Wtorek</th>
              <th>Środa</th>
              <th>Czwartek</th>
              <th>Piątek</th>
              <th>Sobota</th>
              <th>Niedziela</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((item, i) => 
              <UserLine key={item.id} name = {item.name}/>
            )}            
          </tbody>
        </table>
        <Popup btnClass="mm-popup__btn button" closeHtml={'Zamknij'}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      users: state.calendarData.users
    }
}



export default connect(mapStateToProps)(Calendar);