import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Page extends Component{

    render(){

        return(
            <div>
                This is different page!
                <Link to='/'>Go Home</Link>
            </div> 
        );

    }
}