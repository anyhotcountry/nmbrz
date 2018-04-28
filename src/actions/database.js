import firebase from 'firebase/app';
import 'firebase/database';
import config from './config';

firebase.initializeApp(config);
const TIMESTAMP = firebase.database.ServerValue.TIMESTAMP;

export default firebase.database();

export { TIMESTAMP };
