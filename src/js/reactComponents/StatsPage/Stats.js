import React, { Component } from 'react';
import { connect } from 'react-redux';



class Stats extends Component{

    render(){

        return(
            <div>
                Stats. A twoj user to: <strong>{this.props.userName}</strong>
            </div> 
        );
    }
}



function mapStateToProps(state) {
    return {
        userName: state.currentUser.name
    }
}



export default connect(mapStateToProps)(Stats);