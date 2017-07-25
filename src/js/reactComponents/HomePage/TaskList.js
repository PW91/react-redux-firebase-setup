import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './Task';

class TaskList extends Component{

    render(){

        let loadingCopy = '';

        if (this.props.loading) {
            loadingCopy = 
                <div className="loading__wrapper">
                    <p className="loading__text">Loading...</p>
                </div>
        }
        
        return(
            <div className='home-page__open-tasks-list'>
                { loadingCopy }
                {this.props.openTasks.map((row, i) => 
                    <Task key={row.id} taskName={row.name} taskCategory={row.category} taskProject={row.project}/>
                )}
            </div> 
        );
    }
}



function transformToArr(obj) {

    let arr = [];

    for (var key in obj) {
        obj[key].id = key;
        arr.push(obj[key])
    }

    return arr;
}



function mapStateToProps(state) {
    return {
        openTasks: transformToArr(state.currentUser.openTasks),
        loading: state.currentUser.loading
    }
}



export default connect(mapStateToProps)(TaskList);