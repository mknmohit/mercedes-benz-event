import * as firebase from 'firebase';

import { FirebaseConfig } from './keys';
firebase.initializeApp(FirebaseConfig);

export const authRef = firebase.auth();
export const dbRef = firebase.firestore();
