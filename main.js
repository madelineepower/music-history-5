"use strict";

var songs = [];

console.log("hi music-5");

$(".Add-Music-View").hide();

$("#add-music-link").click(function(){
      $(".List-Music-View").hide();
      $(".Add-Music-View").show();
})

$("#list-music-link").click(function(){
      $(".Add-Music-View").hide();
      $(".List-Music-View").show();
})

var showSongs = (songs) => {
  console.log("songs", songs);
  for (var i = 0; i < songs.length; i++) {
    $("#song-names").append(`<section class="song-result">
                  <h2>${songs[i].name} </h2>
                  <p>${songs[i].artist} |</p>
                  <p>${songs[i].album} </p>
                  <button class="deleteBtn">Delete Song</button>
                </section>`);
          }
           for (song = 0; song < $(".deleteBtn").length; song++) {
                $(".deleteBtn").click(function(event) {
                console.log("you clicked delete");
                var songToDelete = event.target.parentNode;
                console.log(songToDelete);
                songToDelete.remove();
              })
            }
        }


$('#addButton').click(function(event) {
  var newSongObject = new Object();
      newSongObject.name = $("#song-input").val();
      newSongObject.artist = $("#artist-input").val();
      newSongObject.album = $("#album-input").val();
      songs.push(newSongObject);
      console.log(newSongObject);
      $('#song-names').append(`<section class="song-result">
                    <h2>${newSongObject.name} </h2>
                    <p>${newSongObject.artist} |</p>
                    <p>${newSongObject.album} </p>
                    <button class="deleteBtn">Delete Song</button>
                  </section>`);
     $("#song-input").val("");
     $("#artist-input").val("");
     $("#album-input").val("");
     showSongs(newSongObject)
})

$("#moreBtn").click(function(event) {
   let moreSongs = (songs) => {
    for (var i = 0; i < songs.length; i++) {
      $("#song-names").append(`<section class="song-result">
                    <h2>${songs[i].name} </h2>
                    <p>${songs[i].artist} |</p>
                    <p>${songs[i].album} </p>
                    <button class="deleteBtn">Delete Song</button>
                  </section>`);
    }
}
  $.ajax({
  	url:"moresongs.json"
  }).done(moreSongs);
})

$.ajax({
	url:"songs.json"
}).done(showSongs);
