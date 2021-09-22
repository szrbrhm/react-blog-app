import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDMcQmNjLmoiwwEwIZh7wlf9EN-zKnabDw",
    authDomain: "react-blog-app-db0ab.firebaseapp.com",
    projectId: "react-blog-app-db0ab",
    storageBucket: "react-blog-app-db0ab.appspot.com",
    messagingSenderId: "266943995628",
    appId: "1:266943995628:web:e32efa3d7081e3bf608fc9"
});

export const createUser = async (email, password, displayName) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('user')
        // Signed in
        // var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log(error)
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // ..
      });
    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ displayName });
  } catch (error) {
    alert(
      "There exists an account with this email. Please login with your password or continue with Google!"
    );
  }
};
export const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('signin')
      // Signed in
      // var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.log(error)
      // var errorCode = error.code;
      // var errorMessage = error.message;
      alert("The password is invalid or the user does not have a password!");
    });
};
export const signOut = () => {
  firebase.auth().signOut();
};
export const userObserver = async (setCurrentUser) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      // User is signed out
      setCurrentUser(null);
    }
  });
};
export const signUpProvider = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  firebase.auth().signInWithPopup(provider);
};
export const forgotPassword = (email) => {
  firebase.auth().sendPasswordResetEmail(email);
  alert("Please check your mail box!");
};
export default firebaseApp;