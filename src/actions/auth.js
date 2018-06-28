import firebase from 'firebase';
import { firebaseAuth } from './database';
import {
  SHOW_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from './types';


const authenticate = provider => {
  return dispatch => {
    firebaseAuth.signInWithPopup(provider)
      .then(result => dispatch(signInSuccess(result)))
      .catch(error => dispatch(signInError(error)));
  };
}

const signInError = error => {
  return {
    type: SHOW_ERROR,
    payload: error.message
  };
}


const signInSuccess = (result) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: result.user
  };
}

export const signInWithGithub = () => {
  return authenticate(new firebase.auth.GithubAuthProvider());
}


export const signInWithGoogle = () => {
  return authenticate(new firebase.auth.GoogleAuthProvider());
}

export const signInWithEmail = () => {
  return authenticate(new firebase.auth.EmailAuthProvider());
}

export const signInWithTwitter = () => {
  return authenticate(new firebase.auth.TwitterAuthProvider());
}


export const signOut = () => {
  return dispatch => {
    firebaseAuth.signOut()
      .then(() => dispatch(signOutSuccess()));
  };
}

export const onAuthStateChanged = () => {
  return dispatch => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signInSuccess({ user }));
      }
    });
  }
}


const signOutSuccess = () => {
  return {
    type: SIGN_OUT_SUCCESS
  };
}