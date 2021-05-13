import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { createContext } from "react";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCO9oPZVorZXVmvITcgBzD1tWwI6Wavgv4",
  authDomain: "chat-react-b5b7f.firebaseapp.com",
  projectId: "chat-react-b5b7f",
  storageBucket: "chat-react-b5b7f.appspot.com",
  messagingSenderId: "152352247766",
  appId: "1:152352247766:web:28021d37ee083ef9f7de77",
  measurementId: "G-7JNP1ZQXSB",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
