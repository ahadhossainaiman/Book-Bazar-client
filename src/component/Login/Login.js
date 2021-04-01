import React, { useContext, useState} from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {

    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
  // const [user, setUser] = useState({
  //   isSignedIn: false,
  //   name: '',
  //   email: '',
  //   password: '',
  //   photo: ''
  // });
     

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
    

    const handleGoogleSignIn = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
      const {displayName,photoURL,email} = result.user;
        const signedInUser = {
            isSignedIn:true,
            name:displayName,
            email:email,
            photo:photoURL,
            success:true
        };
        // return signedInUser;
        // setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);

  }).catch((error) => {
    var errorMessage = error.message;
    var email = error.email;
    console.log(errorMessage,email)
  });
}

  
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Sign In using Google</button>
            <p>{loggedInUser.name}</p>
        </div>
    );
};

export default Login;