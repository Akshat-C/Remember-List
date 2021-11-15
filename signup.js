var firebaseConfig = {
    apiKey: "AIzaSyBMwdeOMPScS7powASzamxPcZY1QKD1UR8",
    authDomain: "remember-list-ba4ca.firebaseapp.com",
    databaseURL: "https://remember-list-ba4ca-default-rtdb.firebaseio.com",
    projectId: "remember-list-ba4ca",
    storageBucket: "remember-list-ba4ca.appspot.com",
    messagingSenderId: "87797918726",
    appId: "1:87797918726:web:865d05e976dc28832f2787"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

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