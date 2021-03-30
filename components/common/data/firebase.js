import firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCR4Sln1FBe1dpvzAvvR9eiWO-GkTnirtc",
  authDomain: "contemplato-app.firebaseapp.com",
  projectId: "contemplato-app",
  storageBucket: "contemplato-app.appspot.com",
  messagingSenderId: "102157901782",
  appId: "1:102157901782:web:7661638b1af74bf0de8e77",
  measurementId: "G-36J7D4RCCF",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}
const storage = firebase.storage()

export { storage, firebase as default }
