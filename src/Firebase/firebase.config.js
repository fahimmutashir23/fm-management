import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAofWlnCCSwSPB21kQVxrTEML7kktFJOZs",
  authDomain: "fm-managment.firebaseapp.com",
  projectId: "fm-managment",
  storageBucket: "fm-managment.appspot.com",
  messagingSenderId: "612880033623",
  appId: "1:612880033623:web:e2834d65828ced10fa4012"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth