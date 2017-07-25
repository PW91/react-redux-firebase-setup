import firebase from '../firebase/firebase';



export function fetchUserData(userName) {

  return function (dispatch) {

    dispatch( { type: "FETCH_USER_DATA_REQUESTED" } );

    return new Promise (( resolve, reject ) => {

      firebase.database().ref('/users/' + userName + '/')
        .once('value')
        .then(response => {

          dispatch( { type: 'FETCH_USER_DATA_FULFILLED', payload: response.val() } );
        })
        .catch(error => {

          dispatch( { type: "FETCH_LEADS_REQUESTED", payload: error } );
          reject(error);
        })
    })
  }
}