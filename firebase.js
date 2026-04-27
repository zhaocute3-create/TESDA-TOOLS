import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjucPXbCYj_XvkDER6njOlKZs21X7a0vc",
  authDomain: "bp-coins-seller-614ef.firebaseapp.com",
  projectId: "bp-coins-seller-614ef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
