// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
// Docs at http://simpleweatherjs.com
$(document).ready(function(){

$('button').on('click', function() {
  
  // 1. Get & store entered zipcode
  var zipcode = $('#getWeather').val();
  
  // 2. Pass weather into _simpleWeather()_ object
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      // Get & store temperature F
      var temp = weather.temp + '°f';
      // Get & store city
      var city = weather.city;
      // Get & store temperature C
      var tempc = weather.tempAlt + '°c';
      // Get & store sunrise
      var sunrise = 'Sunrise: ' + weather.sunrise + ' / ';
      // Get & store sunset
      var sunset = 'Sunset: ' + weather.sunset;
      // Get & store weather code
      var code = weather.code;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.tempc').text(tempc);
      $('.sunrise').text(sunrise);
      $('.sunset').text(sunset);
      $('.code').text(code);

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