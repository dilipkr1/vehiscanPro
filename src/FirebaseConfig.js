import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyAxvCqK0-eZJlQbeIBEeiDr-OJQC4eEvgg",
//     authDomain: "vehicconnect.firebaseapp.com",
//     projectId: "vehicconnect",
//     storageBucket: "vehicconnect.appspot.com",
//     messagingSenderId: "1098798696834",
//     appId: "1:1098798696834:web:4520625a39ecf13738a79b",
//     measurementId: "G-LRFCY7GS54",
//  };

const firebaseConfig = {
    apiKey: "AIzaSyAJ90XdyJ9xVIarQlX-L_oRCSGBuhdN2l0",
    authDomain: "otp-authentication-dc9fd.firebaseapp.com",
    projectId: "otp-authentication-dc9fd",
    storageBucket: "otp-authentication-dc9fd.appspot.com",
    messagingSenderId: "497021402944",
    appId: "1:497021402944:web:97fe59e8115e3cfb1244a5",
    measurementId: "G-NNB3E5BMPW"
  };

const app = initializeApp(firebaseConfig);
 
export const auth = getAuth(app);


