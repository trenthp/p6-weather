// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
// Docs at http://simpleweatherjs.com
$(document).ready(function(){

$('#getWeather .button').on('click', function() {
  
  // 1. Get & store entered zipcode
  var zipcode = $('#getWeather input').val();
  
  // 2. Pass weather into _simpleWeather()_ object
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp + '°f';
      // Get & store city
      var city = weather.city;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);

      // See console for all properties of object
      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // 3. Reset input value
  $('#getWeather input').val('');
  
});




  console.log('Page Loaded. Lets Do this!');

}); 