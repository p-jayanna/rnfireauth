import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

async function onGoogleButtonPress() {
  // Get the users ID token
  const idToken = await GoogleSignin.signIn();
  console.log(idToken);
  // Create a Google credential with the token
  //const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  //return auth().signInWithCredential(googleCredential);
  return idToken;
}

export default onGoogleButtonPress;
