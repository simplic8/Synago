import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB447aA6YDYLHlz3mIQsxYqRpMSO8VsG2k",
    authDomain: "synago-924a7.firebaseapp.com",
    databaseURL: "https://synago-924a7.firebaseio.com",
    projectId: "synago-924a7",
    storageBucket: "synago-924a7.appspot.com",
    messagingSenderId: "576588613110"
  };

  var fire = firebase.initializeApp(config);

export default fire;