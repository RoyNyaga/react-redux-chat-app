import firebase from "firebase";
import { authConstants } from "./constants";

const firestore = firebase.firestore;
const auth = firebase.auth;


export const signup = (user) => {
  return async (dispatch) => {
    const db = firestore();

    dispatch({type: `${authConstants.USER_LOGIN}_REQUEST`})
    auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(data => {
      // console.log(data)
      const currentUser = auth().currentUser;
      const name = `${user.firstName} ${user.lastName}`;
      currentUser.updateProfile({
        displayName: name
      })
      .then(() => {
        //if you are here means it is updated
        // console.log(data.user.displayName, "this is displayName")
        db.collection("users").add({
          firstName: user.firstName,
          lastName: user.lastName,
          uid: data.user.uid,
          createdAt: new Date()
        })
        .then(() => {
          const loggedInUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            uid: data.user.uid,
            email: user.email
          }
          localStorage.setItem("user", JSON.stringify(loggedInUser))
          console.log("user logged in successfully")
          dispatch({
            type: `${authConstants.USER_LOGIN}_SUCCESS`,
            payload: { user: loggedInUser}
          })
          
        })
        .catch(error => {
          console.log(error)
          dispatch({ 
            type: `${authConstants.USER_LOGIN}_FAILURE`,
            payload: { error }
          })
        })
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const signin = (user) => {
  return async dispatch => {
    dispatch({ type: `${authConstants.USER_LOGIN}_REQUEST`});
    auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      console.log(data)
      const name = data.user.displayName.split(" ");
      const firstName = name[0];
      const lastName = name[1];

      const loggedInUser = {
        firstName,
        lastName,
        uid: data.user.uid,
        email: data.user.email
      }

      localStorage.setItem("user",JSON.stringify(loggedInUser))
      dispatch({
        type: `${authConstants.USER_LOGIN}_SUCCESS`,
        payload: { user: loggedInUser }
      })

    })
    .catch(error => {
      console.log(error)
      dispatch({ 
        type: `${authConstants.USER_LOGIN}_FAILURE`,
        payload: { error }
      })
    })
  }
}