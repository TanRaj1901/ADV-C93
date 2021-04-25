  var firebaseConfig = {
    apiKey: "AIzaSyBFOkuUfjrE54F4gUChCJqVQBwuptPJqIk",
    authDomain: "lets-chat-web-app-2f20f.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-2f20f-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-2f20f",
    storageBucket: "lets-chat-web-app-2f20f.appspot.com",
    messagingSenderId: "208242272578",
    appId: "1:208242272578:web:4b092678f8b052751a00db"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
  document.getElementById("name").innerHTML = "Welcome " + user_name + " !";

function logout() {
    localStorage.removeItem("username");
    window.location = "index.html";
}

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({purpose : "Adding Room Name"});

    localStorage.setItem("Room Name" , room_name);

    window.location = "kwitter_room.html"
}