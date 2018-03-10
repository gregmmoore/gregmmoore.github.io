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

// set the day when an option is clicked on
$(".reservation-day li").on("click", function() {
    reservationData.day = $(this).text();
});

$(".reservations").on("submit", function(e) {
    e.preventDefault();

    reservationData.name = $(".reservation-name").val();

    // push configured data object to database
  database.ref('reservations').push(reservationData);
});


// on initial load and addition of each reservation update the view
database.ref('reservations').on('child_added', function(myres) {
  // grab element to hook to
  var reservationList = $('.reservation-list');
  // get data from database
  var reservations = myres.val();
  // get your template from your script tag
  var source = $("#reservation-template").html();
  // compile template
  var template = Handlebars.compile(source);
  // pass data to template to be evaluated within handlebars
  // as the template is created
  var reservationTemplate = template(reservations);
  // append created templated
  reservationList.append(reservationTemplate);
});


var d = new Date();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var currentDay = days[d.getDay()];

function storeAvail() {
  if (currentDay !== "Sunday" && currentDay !== "Saturday") {
    document.querySelector(".storeOpen").innerHTML = "We're Open!";
  } 
  else {
    document.querySelector(".storeOpen").innerHTML = "Sorry, we're closed";
  }
}

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