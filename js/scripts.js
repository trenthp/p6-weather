// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
// Docs at http://simpleweatherjs.com
$(document).ready(function(){

$('.button').click(function(){

      var getZip = $('input').val();
      console.log(getZip);
    
  //Simple Weather
    $.simpleWeather({  
      zipcode: getZip,
      location: '',
      unit: 'f',
      success: function(weather) {
        
      //Get weather data
        html = '<h3>'+weather.city+', '+weather.region+'</h3>';
        html += '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
        html += '<ul><li><img src="img/'+weather.code+'.png"></li>';
        html += '<li><h5>'+weather.currently+'</h5></li></ul>';
        
        
        $('body').addClass('bg' + weather.code);
      
      //Put weather data, calling simple weather
        $("#weather").html(html);
      },
      error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
      }
      });

  }); //Button click function *end*



  console.log('Page Loaded. Lets Do this!');

}); 