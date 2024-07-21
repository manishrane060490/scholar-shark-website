// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu1KPBesyhCABn6Qqv-6I8nyrqkSTPYFs",
  authDomain: "notification-app-31ae5.firebaseapp.com",
  projectId: "notification-app-31ae5",
  storageBucket: "notification-app-31ae5.appspot.com",
  messagingSenderId: "536233328474",
  appId: "1:536233328474:web:6e49376badfdfa4ababd63",
  measurementId: "G-DYRDTY3D5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);