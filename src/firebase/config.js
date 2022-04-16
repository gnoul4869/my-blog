import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD5SOgIcnZQUhsD-KPckXXFEDOvR-g83jk',
    authDomain: 'vue-firebase-913a7.firebaseapp.com',
    projectId: 'vue-firebase-913a7',
    storageBucket: 'vue-firebase-913a7.appspot.com',
    messagingSenderId: '231001948803',
    appId: '1:231001948803:web:e7012569320813452911b6',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore();

export { firestore };
