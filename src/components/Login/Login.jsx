import { useDispatch } from "react-redux";
import "./Login..css";
import { provider, auth } from "../../firebase/firebase";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { login } from "../../features/app/appslice";
const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
     dispatch(login(
      {
        username: result.user.displayName,
        profilePic: result.user.photoURL,
        id: result.user.uid,
      }
      ))
    })
    .catch((error) => {
        console.log(error)
       
      });
  };
  return (
    <div className="login">
      <img
        src="https://img.icons8.com/3d-fluency/344/snapchat-squared.png"
        alt="sc-logo"
      />
      <button className="login__btn" onClick={signIn}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
