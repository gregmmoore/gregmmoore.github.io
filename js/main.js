 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDXFRtzoyqQ5mrv_u6vXZXpVyx8E1Y9Lsc",
    authDomain: "restaraunt-site.firebaseapp.com",
    databaseURL: "https://restaraunt-site.firebaseio.com",
    projectId: "restaraunt-site",
    storageBucket: "restaraunt-site.appspot.com",
    messagingSenderId: "946381516268"
  };
  firebase.initializeApp(config);

  // Connect to Database
var database = firebase.database();

var reservationData = {};

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 40.8054491, lng: -73.9654415},
		zoom: 17
	});

	var marker = new google.maps.Marker({
		position: {lat: 40.8054491, lng: -73.9654415},
		map: map
	});
}