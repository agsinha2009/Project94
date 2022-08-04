
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

      window.location="index.html";

}
function addRoom(){
      room_name=document.getElementById("room_name").value;
      localStorage.setItem("room_name",room_name);

      const firebaseConfig = {
            apiKey: "AIzaSyBINpP4luq1oayNiFjYhoqC8e6P2cV2UGA",
            authDomain: "project94-27f76.firebaseapp.com",
            databaseURL: "https://project94-27f76-default-rtdb.firebaseio.com",
            projectId: "project94-27f76",
            storageBucket: "project94-27f76.appspot.com",
            messagingSenderId: "96772179192",
            appId: "1:96772179192:web:184e572a96af02aaae670d"
          };
          
          // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
}