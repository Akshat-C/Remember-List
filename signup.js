function back()
{
    window.location = "index.html";
}

function signup()
{
    username = document.getElementById("user_name").value;
    password = document.getElementById("password").value ;
    if ( username == "" && password == "")
    {
        document.getElementById("required").innerHTML = "*Please enter both a password and username"
    } else 
    {
        localStorage.setItem( username, password);
        localStorage.setItem("username", username);
        window.location = "list.html";
    }
    
}