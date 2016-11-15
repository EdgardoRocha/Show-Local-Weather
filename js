$(document).ready(function(){
 var API_KEY = 'YOUR API KEY GOES HERE';
  // gets location from ip address.
  $.getJSON('http://ipinfo.io/',function(data){
  var d = data.loc.split(',');

    var lat = d[0];
    var lon = d[1];    
    var url_imperial = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + API_KEY;
    var url_metric = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=' + API_KEY;
    // sets weather information.
    // url_imperial or url_metric works as the url for now.
    $.getJSON(url_imperial,function(info){
        // this gets the different pictures based on the weather.
        var pic_icon = info.weather[0].icon;
        var pic = 'http://openweathermap.org/img/w/'+pic_icon+'.png'
        $("#weather").attr("src",pic);
        // sets location
        $('#loc').text(info.name);
        // sets temp
        $('#temp').text(info.main.temp + ' degrees');
  });


  }); 

});
