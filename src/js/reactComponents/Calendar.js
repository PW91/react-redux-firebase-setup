import React, { Component } from 'react';
import Popup from 'react-popup';
import AddTaskPopup from './AddTaskPopup';



export default class Calendar extends Component {

  constructor() {

    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("SDsadsdsad");
  }

	handlePopup(e) {
    //console.log(e.target.id);

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
        <table>
          <thead>
            <tr>
              <th>empty</th>
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
            <tr>
              <th>Asia</th>
              <td>
                <div className="tasks"></div>
                <button onClick={this.handlePopup} id="asia240717">dodaj zadanie</button>
              </td>
              <td>
                <div className="tasks"></div>
                <button onClick={this.handlePopup} id="asia250717">dodaj zadanie</button>
              </td>
              <td>
                <div className="tasks"></div>
                <button onClick={this.handlePopup} id="asia260717">dodaj zadanie</button>
              </td>
              <td>
                <div className="tasks"></div>
                <button onClick={this.handlePopup} id="asia270717">dodaj zadanie</button>
              </td>
              <td>
                <div className="tasks"></div>
                <button onClick={this.handlePopup} id="asia280717">dodaj zadanie</button>
              </td>
              <td>
                <div className="tasks"></div>
                <button onClick={this.handlePopup} id="asia290717">dodaj zadanie</button>
              </td>
              <td>
                <div className="tasks"></div>
                <button onClick={this.handlePopup} id="asia300717">dodaj zadanie</button>
              </td>
            </tr>
            <tr>
              <th>Jozek</th>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
            </tr>
            <tr>
              <th>Maciek</th>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
            </tr>
            <tr>
              <th>Przemek</th>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
              <td>dodaj zadanie</td>
            </tr>
          </tbody>
        </table>
        <Popup btnClass="mm-popup__btn button" closeHtml={'Zamknij'}/>
      </div>
    );
  }
}