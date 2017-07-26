import React, { Component } from 'react';
import Popup from 'react-popup';

export default class AddTaskPopup extends Component{
    
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var val = this.refs.input1.value;

        var costam = this.props.field.parentElement.querySelector('.tasks');

        var taskEl = document.createElement('div');
        taskEl.classList.add('single-task');
        taskEl.innerHTML = val;

        costam.appendChild(
            taskEl
        )
        Popup.close();
    }

    render(){

        return(
            <div>
                <h1>Wpisz zadanie</h1>
                <input ref="input1"/>
                <button onClick={this.handleClick}>Dodaj</button>
            </div> 
        );

    }
}