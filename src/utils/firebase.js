// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvlxihRoMHxhmkRwGR0fG5RpAa7rNVZjM",
  authDomain: "netflixgpt-f241f.firebaseapp.com",
  projectId: "netflixgpt-f241f",
  storageBucket: "netflixgpt-f241f.appspot.com",
  messagingSenderId: "232025466363",
  appId: "1:232025466363:web:addbb026c952cf8f18975e",
  measurementId: "G-Y999YT0JVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();