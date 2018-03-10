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

     // create a section for reservations data in your db
  var reservationsReference = database.ref('reservations');

  reservationsReference.push(reservationData);
});

// retrieve reservations data when page loads and when reservations are added
function getReservations() {

  // use reference to database to listen for changes in reservations data
  database.ref('reservations').on('value', function(results) {

    // Get all reservations stored in the results we received back from Firebase
    var allReservations = results.val();

    // remove all list reservations from DOM before appending list reservations
    $('.reservations').empty();

    // iterate (loop) through all reservations coming from database call
    for (var reservation in allReservations) {
    // Create an object literal with the data we'll pass to Handlebars
      var context = {
        name: allReservations[reservation].name,
        day: allReservations[reservation].day,
        reservationId: reservation
      };

      console.log(context.name);

    }

  });

}

// When page loads, get reservations
getReservations();

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