import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD5SOgIcnZQUhsD-KPckXXFEDOvR-g83jk',
    authDomain: 'vue-firebase-913a7.firebaseapp.com',
    projectId: 'vue-firebase-913a7',
    storageBucket: 'vue-firebase-913a7.appspot.com',
    messagingSenderId: '231001948803',
    appId: '1:231001948803:web:e7012569320813452911b6',
};

// Init firebase
firebase.initializeApp(firebaseConfig);

// Init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
