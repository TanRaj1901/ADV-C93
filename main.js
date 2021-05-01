function addUser() {
    user_name = document.getElementById("user_name").value;
    if (user_name == "") {
        code1 = "<div class='alert alert-danger alert-dismissible'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Alert! </strong>Access Denied! Username required!</div>";
        document.getElementById("warning").innerHTML = code1;
    }
    else {
        code2 = "<button class='btn btn-info'><span class='spinner-border spinner-border-sm'></span>Loading..</button>";
        document.getElementById("login_button").innerHTML = code2;
        localStorage.setItem("User Name" , user_name);
        console.log("Username" , user_name);
        window.location = "kwitter_page.html";
    }
}