import firebase from 'firebase';

const config = {
    apiKey: "key changed",
    authDomain: "friends-d7d17.firebaseapp.com",
    databaseURL: "https://friends-d7d17.firebaseio.com",
    projectId: "friends-d7d17",
    storageBucket: "friends-d7d17.appspot.com",
    messagingSenderId: "601138510393"
};
firebase.initializeApp(config);
export default firebase;
