import React, { useContext } from 'react';
import './Login.css';
import loginImg from '../../../Images/login.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleProvider = new firebase.auth.GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(res => {
                let credential = res.credential;
                const accessToken = credential.accessToken;
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    success: true,
                    token: accessToken
                };
                setLoggedInUser(signedInUser);
                sessionStorage.setItem('token', signedInUser.token);
                sessionStorage.setItem('email', signedInUser.email);
                sessionStorage.setItem('name', signedInUser.name);
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
    return (
        <div className='container loginDisplayMain'>
            <div className="shadow loginDisplay">
                <div className="p-5">
                    <img src={loginImg} alt="" />
                    <div className="text-center mt-4">
                        <p>Don't have an account? <a href="/login">create one</a></p>
                    </div>
                </div>
                <div className="p-5">
                    <h3 className="mb-5">LOGIN</h3>
                    <form className="w-75">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-dark mt-5">Submit</button>
                    </form>
                    <div className="mt-4 text">
                        <h6 className="mb-4">Or Login With</h6>
                        <button className="socialIcon mr-3"><FontAwesomeIcon icon={faFacebookF} /></button>
                        <button className="socialIcon" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /></button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;