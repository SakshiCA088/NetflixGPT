import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDI3n_Sv4FBe6IjxjCRP6Qy0D2XyOaFu7U",
  authDomain: "netflixgpt-55f3c.firebaseapp.com",
  projectId: "netflixgpt-55f3c",
  storageBucket: "netflixgpt-55f3c.appspot.com",
  messagingSenderId: "31104790159",
  appId: "1:31104790159:web:d1c3c99a54bdfb72614afa",
  measurementId: "G-D4ZZJL7PW6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
