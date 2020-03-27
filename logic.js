$(document).ready(function() {
  console.log('THE DOCUMENT IS READY');
  var chuckNorrisURL = 'https://api.chucknorris.io/jokes/random';
  var catFactsUrl =
    'https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts';

  $.get(chuckNorrisURL, function(response) {
    console.log('response:', response);
    $('#chuckNorrisJokeHere').text(response.value);

    var breakElement = $('<br/>');
    var anchor = $('<a>');
    anchor.attr('href', 'https://api.chucknorris.io/');
    anchor.text('LIKE CHUCK NORRIS JOKES? CHECK OUT MORE HERE');

    $('#chuckNorrisJokeHere').append(breakElement);
    $('#chuckNorrisJokeHere').append(anchor);
  });

  $.get(catFactsUrl, function(response) {
    console.log('response:', response.all);
    var breakElement = $('<br/>');

    for (let i = 0; i < response.all.length; i++) {
      console.log('EACH CAT FACT ', response.all[i].text);
      $('#catFactsHere').append(breakElement);
      $('#catFactsHere').append('<p>' + response.all[i].text + '</p>');
    }
  });
});
