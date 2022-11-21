import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getFirestore, addDoc, getDocs, deleteDoc, collection, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDZKcmvv5mcQRoJPSS6cLYbmotyWUVeI_g",
  authDomain: "fixture-practprof.firebaseapp.com",
  projectId: "fixture-practprof",
  storageBucket: "fixture-practprof.appspot.com",
  messagingSenderId: "804728522044",
  appId: "1:804728522044:web:aec4757795af249f6c4a39",
  measurementId: "G-1M2GWBJFKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export var guardarUsuarioDB = async function (nombre, usuario, pass) {
  return addDoc(
    collection(db, 'usuarios'), { nombre, usuario, pass }
  )
}

export var bdUsuario = async function () {
  return getDocs(collection(db, 'usuarios'));
}
