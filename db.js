import * as firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDHIxAxLKuEyyotqXERbzL2hdothheGhQs",
  authDomain: "random-game-17153.firebaseapp.com",
  databaseURL: "https://random-game-17153.firebaseio.com",
  projectId: "random-game-17153",
  storageBucket: "random-game-17153.appspot.com",
  messagingSenderId: "68589349463",
  appId: "1:68589349463:web:49f132d73b51264cdb5112",
  measurementId: "G-5BDSSZZMC0"
});

var db = firebase.firestore();

export default db;
