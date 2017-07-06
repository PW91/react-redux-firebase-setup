import React, { Component } from 'react';
import { Link } from "react-router";
import { connect } from 'react-redux';

export default class Layout extends Component{

    render(){

        return(
            <div className="container">
                {this.props.children}
            </div> 
        );

    }
}