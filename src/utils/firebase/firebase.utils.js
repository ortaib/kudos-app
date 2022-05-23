import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA6gxRSBXdF8_r56MLdwazsCFEFzEpzi_E",
  authDomain: "crwn-clothing-db-9095b.firebaseapp.com",
  projectId: "crwn-clothing-db-9095b",
  storageBucket: "crwn-clothing-db-9095b.appspot.com",
  messagingSenderId: "880642374606",
  appId: "1:880642374606:web:93bea9019afb5e18d5099f"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account' 
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  
  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })

    } catch(error) {
      console.log('error creating the user' + error.message)
    }
  }
  return userDocRef
}

