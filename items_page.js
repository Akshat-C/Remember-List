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

  var roomname = localStorage.getItem("room_name");  
 
  function show_name()
  {
    document.getElementById("welcome_head").innerHTML = "Welcome to " + roomname + " List"
    document.title = roomname + " List"
  }

  function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    item_data = childData;
//Start code
console.log(firebase_message_id);
console.log(item_data);

item_name = item_data['item'];

itemtag = "<h3 style='text-align: center;'>"+item_name+"</h3><hr>";
document.getElementById("output").innerHTML+=itemtag;
//End code
 } });  }); }
getData();

function addItem()
{
    item = document.getElementById("item_inp").value;
      firebase.database().ref(roomname).push({
            item: item
      });

      document.getElementById("item_inp").value = " ";
}

function logout()
{
    window.location = "index.html";
}

function back()
{
    window.location = "list.html";
}
