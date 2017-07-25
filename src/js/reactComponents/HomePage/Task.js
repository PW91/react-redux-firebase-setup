import React, { Component } from 'react';

export default class Task extends Component{

    render(){

        return(
            <div className='home-page__task'>
                <strong>NAME:</strong> {this.props.taskName} <strong>CATEGORY:</strong> {this.props.taskCategory} <strong>PROJECT:</strong> {this.props.taskProject}
            </div> 
        );

    }
}