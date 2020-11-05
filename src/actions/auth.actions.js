import firebase from "firebase";

const firestore = firebase.firestore;
const auth = firebase.auth;


export const signup = (user) => {
  return async (dispatch) => {
    const db = firestore();
    auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(user => {
      console.log(user)
    })
    .catch(error => {
      console.log(error)
    })
  }
}