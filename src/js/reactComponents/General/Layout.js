import React, { Component } from 'react';
import Navigation from './Navigation';

export default class Layout extends Component{

    render(){

        return(
            <div className='black-task'>
                <Navigation/>
                <div className="content">
                    {this.props.children}
                </div>
            </div> 
        );

    }
}