

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAze6jGiCnjS8fudnWklOss2n7fFb0IkaI",
    authDomain: "inovar-renovar.firebaseapp.com",
    projectId: "inovar-renovar",
    storageBucket: "inovar-renovar.appspot.com",
    messagingSenderId: "14777500564",
    appId: "1:14777500564:web:f3c988b66c4f26e7b78581",
    measurementId: "G-FTFLN8KQ5P"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);