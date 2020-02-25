import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDpJgubJ3gCLe8_HEF3AW9_ZGa0Lyorchg",
  authDomain: "crown-clothing-fc241.firebaseapp.com",
  databaseURL: "https://crown-clothing-fc241.firebaseio.com",
  projectId: "crown-clothing-fc241",
  storageBucket: "crown-clothing-fc241.appspot.com",
  messagingSenderId: "126137668829",
  appId: "1:126137668829:web:ae80ec782982fa5539b734",
  measurementId: "G-VEF8TW6EZB"
};

firebase.initializeApp(config);

export const auth = firebase.auth(); // firebase auth config
export const firestore = firebase.firestore(); // firebase db config


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}


// function to get collection snapshot nd convert it to object/ map
export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      id: doc.id,
      title,
      items,
      routeName: encodeURI(title.toLowerCase())
    }
  });

  console.log(transformedCollection);
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
}); // always trigger google popup

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;