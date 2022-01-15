import firebase from 'firebase'; 

const firebaseConfig = {
      apiKey: "AIzaSyCX7a-ijXj3n29pf49pGv7xQz8jeaAPHoY",
      authDomain: "fir-tinder-cl-a0421.firebaseapp.com",
      projectId: "fir-tinder-cl-a0421",
      storageBucket: "fir-tinder-cl-a0421.appspot.com",
      messagingSenderId: "848834127555",
      appId: "1:848834127555:web:505cea8382af1d2794e476"
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig)
    const db = firebaseApp.firestore() 
    
    export default db 