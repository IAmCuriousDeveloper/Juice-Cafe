import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCEZpkcFm4UvZtxa5dn1i-wENJ5HgLBF5g",
  authDomain: "juice-cafe-df7f9.firebaseapp.com",
  databaseURL: "https://juice-cafe-df7f9.firebaseio.com",
  projectId: "juice-cafe-df7f9",
  storageBucket: "juice-cafe-df7f9.appspot.com",
  messagingSenderId: "163789122489"
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };
//default export
export default base;
