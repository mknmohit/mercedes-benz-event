import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { FirebaseConfig } from './keys';
firebase.initializeApp(FirebaseConfig);

export const authRef = firebase.auth();
export const dbRef = firebase.firestore();
