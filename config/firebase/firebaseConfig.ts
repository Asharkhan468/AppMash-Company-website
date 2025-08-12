import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAfGujz3OW800XYo2HjfBY6LbNBL6iCq9c",
  authDomain: "appmash-website.firebaseapp.com",
  projectId: "appmash-website",
  storageBucket: "appmash-website.firebasestorage.app",
  messagingSenderId: "568632669413",
  appId: "1:568632669413:web:c7346f4cfcd1e91fb1900c",
  measurementId: "G-Q97PT1J5R3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);