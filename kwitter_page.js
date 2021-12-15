//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCarncXTmdbC8K60r0Ctxy43iLDUef3uEY",
      authDomain: "kwitter-8e443.firebaseapp.com",
      databaseURL: "https://kwitter-8e443-default-rtdb.firebaseio.com",
      projectId: "kwitter-8e443",
      storageBucket: "kwitter-8e443.appspot.com",
      messagingSenderId: "740247853699",
      appId: "1:740247853699:web:833caf3a07fab23ef0d9b6",
      measurementId: "G-S1XQZR5R8P"
    };
// Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
