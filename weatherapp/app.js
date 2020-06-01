console.log('fetching weather data');
let country, news, weather;
$(document).ready(function(){
   country = document.querySelector('.user-location'),
   newsUI =    document.querySelector('.news'),
   weather = document.querySelector('.weather-now');

  if(navigator.geolocation){
    let cur = "";
    navigator.geolocation.getCurrentPosition(function(position){
      cur = position;
      var lat = cur.coords.latitude;
      var long = cur.coords.latitude;
      console.log(lat, long);
      let url = "http://api.weatherstack.com/current?access_key=60acc8d0026ebb310106dd42a0704f23&query=";
      $.getJSON(url + lat + " " + long, function(address){
          console.log(address);
          country.innerHTML = address.location.country;
          weather.innerHTML = address.current.weather_descriptions;
      });
    });
  }
    function getNews(){
      let url = "https://gnews.io/api/v3/search?q=example&token=b7c549553542c67eb07363ca1c6bc56c";
        $.getJSON(url, function(news){
          let newsAuthor, newsContent, newsTime;

          newsAuthor = news.articles[0].source.name;
          newsContent = news.articles[0].description;
          newsTime = news.articles[0].publishedAt;
          newsUI.innerHTML = "<li>" + newsAuthor + "</li>" + "<li>" + newsContent + "</li>" + "<li>" + newsTime + "</li>";
        });
    }

    getNews();
});
