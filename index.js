document.addEventListener('DOMContentLoaded', function() {
    showSlides(); // Inicia el carrusel automáticamente al cargar la página
  });
  
  var slideIndex = 0;
  
  function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
  
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
  
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000); // Cambia la imagen automáticamente cada 10 segundos (ajustable)
  }
  
  function plusSlides(n) {
    showSlidesManually(slideIndex += n);
  }
  
  function showSlidesManually(n) {
    var slides = document.getElementsByClassName("mySlides");
  
    if (n > slides.length) {
        slideIndex = 1;
    }
  
    if (n < 1) {
        slideIndex = slides.length;
    }
  
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
  
    slides[slideIndex - 1].style.display = "block";
  }

