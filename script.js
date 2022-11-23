const firebaseConfig = {
  apiKey: "AIzaSyCm29VsZerWnWp0FIvzizLuWiEtMoxcPN8",
  authDomain: "bdcoe-event.firebaseapp.com",
  databaseURL: "https://bdcoe-event-default-rtdb.firebaseio.com",
  projectId: "bdcoe-event",
  storageBucket: "bdcoe-event.appspot.com",
  messagingSenderId: "960236526366",
  appId: "1:960236526366:web:4dbd1ade02d0a35426470f"
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('registrations');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = document.getElementById("name").value;
  var stNumber = document.getElementById("studentno").value;
  var phno = document.getElementById("phno").value;
  var email = document.getElementById("email").value;
  var unvNo = document.getElementById("unvNo").value;
  var branch = document.getElementById("branch").value;
  var section = document.getElementById("section").value;
  var gender = document.getElementById("gender").value;
  var hostel = document.getElementById("hostel").value;

  // Save message
  saveMessage(name, stNumber, phno, email, unvNo, branch, section, gender, hostel);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values


// Save message to firebase
function saveMessage(name, stNumber, phno, email, unvNo, branch, section, gender, hostel){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    Name: name,
    Mail:  email,
    StudentNo: stNumber,
    PhoneNo: phno,
    UnvNo: unvNo,
    Branch: branch,
    Section: section,
    Gender: gender,
    Hosteller:hostel,
  });
}

//     // Import the functions you need from the SDKs you need
//     import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
//     import {getDatabase, ref, get, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyCm29VsZerWnWp0FIvzizLuWiEtMoxcPN8",
//   authDomain: "bdcoe-event.firebaseapp.com",
//   databaseURL: "https://bdcoe-event-default-rtdb.firebaseio.com",
//   projectId: "bdcoe-event",
//   storageBucket: "bdcoe-event.appspot.com",
//   messagingSenderId: "960236526366",
//   appId: "1:960236526366:web:4dbd1ade02d0a35426470f"

//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
  
//   const db = getDatabase(app);
//   var messageRef = db.ref("Registrations");
//   insertBtn.addEventListener('submit', submitForm);
 
//   function submitForm(e){
//   e.preventDefault();

      

//  saveMessage(enterName, enterStNumber, enterPhno, enterEmail, enterUnvNo, enterBranch, enterSection, enterGender, enterHostel)
//  document.getElementById("form").reset();
//  }
//  function saveMessage(enterName, enterStNumber, enterPhno, enterEmail, enterUnvNo, enterBranch, enterSection, enterGender, enterHostel){
//   var newMessageRef=messageRef.push();
//  newMessageRef.set({
//          
//   });
//  }
//  function InsertData() {
//      set(ref(db, "Registrations/"+ enterEmail.value),{
//          Name: enterName.value,
//          Mail: enterEmail.value,
//          StudentNo: enterStNumber.value,
//          PhoneNo: enterPhno.value,
//          UnvNo: enterUnvNo.value,
//          Branch: enterBranch.value,
//          Section: enterSection.value,
//          Gender: enterGender.value,
//          Hosteller: enterHostel.value,
//      })
//      .then(()=>{
//          alert("Form Submitted Successfully");
//      })
//      .catch((error)=>{
//          alert(error);
//      });
//  }