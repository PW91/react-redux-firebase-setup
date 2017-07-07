import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Page extends Component{

    render(){

        return(
            <div>
                <h1>This is different page!</h1>
                <p>Value of databaseUser:</p>
                <h2>{this.props.databaseUser}</h2>
                <p>Value of localUser:</p>
                <h2>{this.props.localUser}</h2>
                <Link to='/'>Go Home</Link>
            </div> 
        );

    }
}



function mapStateToProps(state) {
  return {
    localUser: state.user.localUserName,
    databaseUser: state.user.databaseUserName
  }
}



export default connect(mapStateToProps)(Page);