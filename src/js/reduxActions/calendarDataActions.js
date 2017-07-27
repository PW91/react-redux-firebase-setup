import firebase from '../firebase/firebase';



export function fetchUsers(userName) {

  return function (dispatch) {

    dispatch( { type: "FETCH_USERS_REQUESTED" } );

    return new Promise (( resolve, reject ) => {

      firebase.database().ref('/users/')
        .once('value')
        .then(response => {
          dispatch( { type: 'FETCH_USERS_FULFILLED', payload: response.val() } );
        })
        .catch(error => {

          dispatch( { type: "FETCH_USERS_REJECTED", payload: error } );
          reject(error);
        })
    })
  }
}