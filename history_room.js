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

function back() {
    localStorage.removeItem("name");
    window.location = "kwitter_page.html";
}


function getData() {
    firebase.database().ref("/").on('value',function(snapshot){document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name -" + Room_names);
        row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)'> #" + Room_names  + "</div><hr>";
        document.getElementById("output").innerHTML = row;
    });});}
  
getData();

function addRoom() {
    var room_name = document.getElementById("roomname").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "Adding Room Name"
    });

    localStorage.setItem("Room Name" , room_name);

    window.location = "kwitter_page.html";
  }

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("Room Name", name);
  window.location = "kwitter_chat.html";
}