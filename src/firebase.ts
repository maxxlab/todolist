import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: 'AIzaSyAQeFPNf9tX0gZt19vc3th8RcNfma6Vwhk',
  authDomain: 'todo-2ce3f.firebaseapp.com',
  projectId: 'todo-2ce3f',
  storageBucket: 'todo-2ce3f.appspot.com',
  messagingSenderId: '355964104553',
  appId: '1:355964104553:web:0810cc069e96007560d7f8',
  databaseURL: 'https://todo-2ce3f-default-rtdb.europe-west1.firebasedatabase.app'
};

const app = initializeApp(firebaseConfig);
export default app;