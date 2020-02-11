var slideIndex = 1;
var menuIndex = 1;

(function () {

  showMenu(menuIndex);
  showSlides(slideIndex);

  var overview = document.getElementsByClassName('overview')[0];

  overview.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target != e.currentTarget) {
      var overviewValue = e.target.textContent;
      removeCurrentClasses(overview);
      e.target.className = "is--active";
    }

    showSlides(slideIndex);
  });

})();

function currentMenu(n) {
  showMenu(menuIndex = n);
}

function showMenu(n) {
  var i;
  var bottom = document.getElementsByClassName("bottom");

  for(i = 0; i < bottom.length; i++) {
    bottom[i].style.display = "none";
  }

  bottom[menuIndex - 1].style.display = "flex";

  if(menuIndex == 2) {
      slideIndex = 1;
  }

  if(menuIndex == 3) {
    slideIndex = 5;
  }
}

function removeCurrentClasses(parent) {
  for (var i = 0; i < parent.children.length; i++) {
    parent.children[i].className = "";
  }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}