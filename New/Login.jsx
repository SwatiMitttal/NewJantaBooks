import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Button } from 'react-native';

function GoogleSignIn() {
    GoogleSignin.configure({
        webClientId: '373613249976-9bdfj72fgfri91iersqc30or6osu6h0k.apps.googleusercontent.com'
        
      })
  async function onGoogleButtonPress() {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const signInResult = await GoogleSignin.signIn();
        idToken = signInResult.data?.idToken;
        if (!idToken) {
          // if you are using older versions of google-signin, try old style result
          idToken = signInResult.idToken;
        }
        if (!idToken) {
          throw new Error('No ID token found');
        }
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(signInResult.data.idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      }
      
  return (
    <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
  );
}

export default GoogleSignIn