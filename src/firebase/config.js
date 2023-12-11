
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCTz11AhN2r8J6RoBVo0No7ERSeCUsEtA",
    authDomain: "bikestore-c601a.firebaseapp.com",
    projectId: "bikestore-c601a",
    storageBucket: "bikestore-c601a.appspot.com",
    messagingSenderId: "1048394819990",
    appId: "1:1048394819990:web:7b5afd4c7e41cba5d855b7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const firebaseConnect = () => db;