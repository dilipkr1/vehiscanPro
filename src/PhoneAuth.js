import React, { useState } from 'react';

import { auth } from "./FirebaseConfig"
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const PhoneAuth = () => {
  const coutntryCode = "+91"
  const [phoneNumber, setPhoneNumber] = useState(coutntryCode);
   const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState(null);
 
  const generateReacaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('reacaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
       }
    }, auth);

  }

  const requestOTP = async (e) => {
    e.preventDefault();
    generateReacaptcha();
    let appVerifier = window.recaptchaVerifier
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      }).catch((error) => {
        console.log(error)
      })
  }



  const verifyOTP = async () => {
     setError(null);

    try {
      const credential = auth.PhoneAuthProvider.credential(verificationCode, verificationCode);
      await auth().signInWithCredential(credential);
    } catch (error) {
      setError(error.message);
    }
   }

  return (
    <div className='mt-20 pt-10 ml-20'>
      <input type="text" placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <button id="sign-in-button" onClick={requestOTP}  >Send OTP</button>
      <input type="text" placeholder="Enter OTP" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
      <button onClick={verifyOTP} >Verify OTP</button>
 
      <div id='reacaptcha-container'></div>

    </div>
  );
}

export default PhoneAuth;