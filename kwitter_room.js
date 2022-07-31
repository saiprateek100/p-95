
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAJujkV9dc8mrcmlXTkA0a4bNv-3pqS9CU",
      authDomain: "kwitterprasad.firebaseapp.com",
      databaseURL: "https://kwitterprasad-default-rtdb.firebaseio.com",
      projectId: "kwitterprasad",
      storageBucket: "kwitterprasad.appspot.com",
      messagingSenderId: "762064138131",
      appId: "1:762064138131:web:4af6356b8a6ecede6e8266"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

    function addRoom(){
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name= " + Room_names);
      row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'># " + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
