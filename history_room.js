
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
  window.location = "kwitter_page.html";
}