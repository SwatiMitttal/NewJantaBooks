import { GoogleLogin } from "@react-oauth/google"

const clientid='309512678855-24e59ebi91jgi6b3q3vum312l10oij6e.apps.googleusercontent.com'
const cid1='373613249976-9bdfj72fgfri91iersqc30or6osu6h0k.apps.googleusercontent.com'

function Login(){

    const onSuccess=(res)=>{
        console.log('Login Success',res.profileObj)}
    const onFailure=(res)=>{
        console.log('Login Success',res)}
    return(<div id='signInButton'>
<GoogleLogin
      clientid={cid1}
      buttonText='Login'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}  />
      </div>
    )
}

export default Login

/*<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  useOneTap
/>  */