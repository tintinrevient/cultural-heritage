var m4 = document.getElementById("marker-4");
var m5 = document.getElementById("marker-5");

m4.addEventListener("markerFound", e => {
  console.log("found");
  var movie = document.getElementById("verzetsmonument");
  movie.play();
});

m4.addEventListener("markerLost", e => {
  console.log("lost");
  var movie = document.getElementById("verzetsmonument");
  movie.pause();
});

m5.addEventListener("markerFound", e => {
  console.log("found");
  var movie = document.getElementById("bird-sing");
  movie.play();
});

m5.addEventListener("markerLost", e => {
  console.log("lost");
  var movie = document.getElementById("bird-sing");
  movie.pause();
});