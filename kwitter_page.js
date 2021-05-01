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
  
  function add_room() {
    var room_name = document.getElementById("roomname").value;

    localStorage.setItem("Room Name" , room_name);

    firebase.database().ref("/").child(room_name).update({
      purpose : "Adding Room Name"
    });

    window.location = "kwitter_page.html";
  }

function logout() {
      localStorage.removeItem("name");
      localStorage.removeItem("Room name");
      window.location = "index.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("Room Name", name);
  window.location = "kwitter_page.html";
}