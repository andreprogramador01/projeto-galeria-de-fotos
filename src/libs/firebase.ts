import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {

  apiKey: "AIzaSyDjXr-VvKnvdaUGyv-0kIDisw1SnNftCCM",

  authDomain: "galeria-de-fotos-1dcab.firebaseapp.com",

  projectId: "galeria-de-fotos-1dcab",

  storageBucket: "galeria-de-fotos-1dcab.appspot.com",

  messagingSenderId: "258325499607",

  appId: "1:258325499607:web:1dac2c5433c6ca3b1fea92"

};


  const firebaseApp = initializeApp(firebaseConfig);

  export const storage = getStorage(firebaseApp);
  