// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOx3QXDEW-KWKRotZc3hA6lWT1wXAM4AE",
  authDomain: "e-commerce-base2.firebaseapp.com",
  projectId: "e-commerce-base2",
  storageBucket: "e-commerce-base2.appspot.com",
  messagingSenderId: "212114430670",
  appId: "1:212114430670:web:6beb2ad3091928b00c4e9f",
  measurementId: "G-DFS67RCL3F"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");
window.login= function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      var aaaa =  (success.user.uid);
      localStorage.setItem("uid",aaaa)
      console.log(aaaa)
      if(obj.email=="hamsha09052002@gmail.com"){
        window.location.replace('admin.html');
      }
      else{
        window.location.replace('customerdashboard.html');
      }
      
    })
    .catch(function (err) {
      alert("login error"+err);
    });

  console.log(obj);
}


