var firebaseConfig = {
  apiKey: "AIzaSyBaVq6No-ifQ2yzOKmZrySjDlhwgaZRoko",
  authDomain: "adv-c92345.firebaseapp.com",
  databaseURL: "https://adv-c92345-default-rtdb.firebaseio.com",
  projectId: "adv-c92345",
  storageBucket: "adv-c92345.appspot.com",
  messagingSenderId: "129276350146",
  appId: "1:129276350146:web:6aad9eb463ed16b732f55b"
};

  firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("Room_name");
username = localStorage.getItem("User Name");
document.getElementById("room_name").innerHTML = "Room Name: " + room_name;


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
  console.log(firebase_message_id);
  console.log(message_data);
  name = message_data['name'];
  message = message_data['message'];
  like = message_data['like'];
  name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
  message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
  like_button = "<button class='btn btn-info' id=" + firebase_message_id + " value="+like+" onclick='updateLike(this.id)'>";
  span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

  row = name_with_tag + message_with_tag + like_button + span_with_tag;
  document.getElementById("output").innerHTML = row;
} });  }); }
getData();

function logout() {
  localStorage.removeItem("name");
  localStorage.removeItem("Room_name");
  window.location = "kwitter_page.html";
}

function updateLike(message_id) {
  console.log("Clicked on Like button -" + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
  });
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