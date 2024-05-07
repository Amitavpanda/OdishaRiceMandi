import { User } from "@repo/db/client";
import { error } from "console";
// import * as admin from 'firebase-admin';
import crypto from "crypto";
// const firebase = require('firebase');
// import app from "../firebase";
// import { RecaptchaVerifier, PhoneAuthProvider } from "firebase/auth";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";




export async function sendOTP(input: User) {
    const phoneNumber = input.phoneNumber;
    const otp = Math.floor(10000000 + Math.random() * 90000000);
    const expires = Date.now() + 5 * 60 * 1000;
    const data = `${phoneNumber}.${otp}.${expires}`
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    const fullHash = `${hash}.${expires}`


    try {
        // const auth = admin.auth();
        // var applicationVerifier = new firebase.auth.RecaptchaVerifier(
        //     'recaptcha-container');
        // var provider = new firebase.auth.PhoneAuthProvider();

        return { success: true, data: { hash: fullHash, otp: otp } }
    }
    catch (err: any) {
        error("error is", err);
    }


}