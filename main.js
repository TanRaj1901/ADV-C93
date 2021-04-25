function addUser() {
    user_name = document.getElementById("user_name").value;
    if (user_name == "") {
        code1 = "<div class='alert alert-warning alert-dismissible'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Alert! </strong>Username required!</div>";
        document.getElementById("warning").innerHTML = code1;
    }
    else {
        localStorage.setItem("Username" , user_name);
        window.location = "kwitter_page.html";
    }
}