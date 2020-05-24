console.log('news loading');

$('document').ready(function(){
  let url = 'https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-24&sortBy=publishedAt&apiKey=fcae1983a7c947ae9a78b87a6f060c31';

  $.getJSON(url, function(data){
    let datalength, quotes, title, author;
     datalength = data.articles;

     $('#fetch').on('click', function(){
       quotes = datalength[Math.floor(Math.random() * datalength.length)];
       title = quotes.title;
       author = quotes.author;

       $('.quote').html(title);
       $('.author').html(author);
       console.log(title);
     });
  });
});
