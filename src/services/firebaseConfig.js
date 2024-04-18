import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAj4HcXhXYCpxrPh0p3QpGY7kwetDUll-M",
  authDomain: "chat-cm-885cb.firebaseapp.com",
  projectId: "chat-cm-885cb",
  storageBucket: "chat-cm-885cb.appspot.com",
  messagingSenderId: "1008810849117",
  appId: "1:1008810849117:web:3516368536579c9b3faeb4"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);