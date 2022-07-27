// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAxRt9Cj_92DF3mWyR7KXpWL0jkApqXrpE",
    authDomain: "lets-chat-web-app-3ed68.firebaseapp.com",
    projectId: "lets-chat-web-app-3ed68",
    storageBucket: "lets-chat-web-app-3ed68.appspot.com",
    messagingSenderId: "770172213346",
    appId: "1:770172213346:web:889ed568f643727cb9993b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



