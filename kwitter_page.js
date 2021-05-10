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
    room_name = document.getElementById("roomname").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "Adding Room Name"
    });
    localStorage.setItem("Room_name" , room_name);
    window.location = "kwitter_chat.html";
  }

function logout() {
      localStorage.removeItem("name");
      localStorage.removeItem("Room name");
      window.location = "index.html";
}