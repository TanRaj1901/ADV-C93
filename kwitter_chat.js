var firebaseConfig = {
  apiKey: "AIzaSyBFOkuUfjrE54F4gUChCJqVQBwuptPJqIk",
  authDomain: "lets-chat-web-app-2f20f.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-2f20f-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-2f20f",
  storageBucket: "lets-chat-web-app-2f20f.appspot.com",
  messagingSenderId: "208242272578",
  appId: "1:208242272578:web:4b092678f8b052751a00db"
  };

room_name = localStorage.getItem("Room_name");
username = localStorage.getItem("User Name");
document.getElementById("room_name").innerHTML = "Room Name: " + room_name;

function logout() {
  localStorage.removeItem("name");
  localStorage.removeItem("Room_name");
  window.location = "kwitter_page.html";
}

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:username,
        message:msg,
        like:0
  });

  document.getElementById("msg").value = "";
}