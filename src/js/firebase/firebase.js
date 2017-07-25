import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyA5S_UVo-L2ITgw7HClv8HiaJGeFDBh2T4',
    authDomain: 'blacktask-f9e3c.firebaseapp.com',
    databaseURL: 'https://blacktask-f9e3c.firebaseio.com',
    projectId: 'blacktask-f9e3c',
    storageBucket: 'blacktask-f9e3c.appspot.com',
    messagingSenderId: '419589650137'
};

firebase.initializeApp(config);

export default firebase;
