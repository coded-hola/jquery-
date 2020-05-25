console.log('news loading');

$('document').ready(function(){
  let url = 'https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-25&sortBy=publishedAt&apiKey=9e1e20a74f904672a403cae687b59002';

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

       $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text= ' + title).attr('disabled', false).attr('target', '_blank');
     });
  });
});
