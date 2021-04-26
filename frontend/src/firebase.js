import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyBfjLlO2IOTRD4Te2mb_bpI1zZNU_b1bXM',
    authDomain: 'news-api-61049.firebaseapp.com',
    projectId: 'news-api-61049',
    storageBucket: 'news-api-61049.appspot.com',
    messagingSenderId: '1010701461370',
    appId: '1:1010701461370:web:85b629f2fe7f895f06d8c3'
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth, firebase };