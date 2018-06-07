import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import config from './config';

firebase.initializeApp(config);
const TIMESTAMP = firebase.database.ServerValue.TIMESTAMP;

export default firebase.database();

const firebaseAuth = firebase.auth();

export { TIMESTAMP, firebaseAuth };
