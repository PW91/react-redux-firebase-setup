import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component{

    render(){

        return(
            <nav className='nav'>
                <Link to="/">Home</Link>
                <Link to="files">Files</Link>
                <Link to="stats">Stats</Link>
            </nav> 
        );

    }
}