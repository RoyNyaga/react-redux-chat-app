import firebase from "firebase";

const firestore = firebase.firestore;
const auth = firebase.auth;


export const signup = (user) => {
  return async (dispatch) => {
    const db = firestore();
    auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(data => {
      console.log(data)
      const currentUser = auth().currentUser;
      const name = `$(user.firstName) $(user.lastName)`;
      currentUser.updateProfile({
        displayName: name
      })
      .then(() => {
        //if you are here means it is updated
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
          
        })
        .catch(error => {
          console.log(error)
        })
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
}